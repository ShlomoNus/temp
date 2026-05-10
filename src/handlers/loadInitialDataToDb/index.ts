import { estypes } from "@elastic/elasticsearch";

import { FileItem } from "@/handlers/loadInitialDataToDb/types/data";

import { CONFIG } from "@/CONFIG";
import { esBaseData } from "./consts/data";
import { ensureIndexExists, esClient } from "@/utils/esClient";
import { logger } from "@/utils/logger";

const {
  ES_INDEX_NAME
} = CONFIG;

const BULK_CHUNK_SIZE = 200;

type LoadInitialDataResult = {
  indexName: string
  total: number
  indexed: number
  failed: number
  errors: string[]
};

const ES_INDEX_MAPPING_BODY: Omit<estypes.IndicesCreateRequest, "index"> = {
  mappings: {
    properties: {
      id: { type: "integer" },
      fileName: {
        type: "text",
        fields: {
          raw: { type: "keyword" }
        }
      },
      pdfUrl: { type: "keyword" },
      category: { type: "keyword" },
      subCategory: { type: "keyword" },
      informationType: { type: "keyword" },
      language: { type: "keyword" },
      isPublish: { type: "boolean" },
      status: { type: "keyword" },
      createdAt: { type: "date" },
      updatedAt: { type: "date" }
    }
  }
};

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const out: T[][] = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    out.push(arr.slice(i, i + chunkSize));
  }

  return out;
}

function buildBulkOperations(
  { indexName, nowIso, chunk }: {
    indexName: string
    nowIso: string
    chunk: FileItem[]
  }
): estypes.BulkRequest["operations"] {
  return chunk.flatMap(item => [
    {
      index: {
        _index: indexName,
        _id: String(item.id)
      }
    },
    {
      ...item,
      createdAt: nowIso,
      updatedAt: nowIso
    }
  ]);
}

export async function loadInitialDataToDb(): Promise<LoadInitialDataResult> {
  const indexName = ES_INDEX_NAME.trim() || "earthquake-documents";

  logger.info({
    indexName,
    totalFiles: esBaseData.length,
    chunkSize: BULK_CHUNK_SIZE
  }, "loadInitialDataToDb: starting");

  logger.info({ indexName }, "loadInitialDataToDb: ensuring index exists");
  await ensureIndexExists(indexName, ES_INDEX_MAPPING_BODY);
  logger.info({ indexName }, "loadInitialDataToDb: index is ready");

  const nowIso = new Date().toISOString();
  const chunks = chunkArray(esBaseData, BULK_CHUNK_SIZE);
  const errors: string[] = [];
  let indexed = 0;
  let failed = 0;

  for (const [chunkIndex, chunk] of chunks.entries()) {
    const chunkNumber = chunkIndex + 1;
    const operations = buildBulkOperations({ indexName, nowIso, chunk });

    logger.info({
      chunkNumber,
      totalChunks: chunks.length,
      documents: chunk.length
    }, "loadInitialDataToDb: indexing chunk");

    const bulkResponse = await esClient.bulk({
      refresh: "wait_for",
      operations
    });

    let chunkIndexed = 0;
    let chunkFailed = 0;

    for (const item of bulkResponse.items) {
      const indexResult = item.index;

      if (!indexResult) {
        failed += 1;
        chunkFailed += 1;
        logger.error({
          chunkNumber
        }, "loadInitialDataToDb: bulk item missing index result");
        continue;
      }

      if ((indexResult.status ?? 500) >= 300) {
        const errorMessage = [
          `${indexResult._id ?? "unknown"}:`,
          indexResult.error?.type ?? "error",
          indexResult.error?.reason ?? ""
        ].join(" ").trim();

        failed += 1;
        chunkFailed += 1;
        errors.push(errorMessage);
        logger.error({
          chunkNumber,
          documentId: indexResult._id,
          status: indexResult.status,
          error: indexResult.error
        }, "loadInitialDataToDb: failed to index document");
      }
      else {
        indexed += 1;
        chunkIndexed += 1;
      }
    }

    logger.info({
      chunkNumber,
      totalChunks: chunks.length,
      indexed: chunkIndexed,
      failed: chunkFailed
    }, "loadInitialDataToDb: finished indexing chunk");
  }

  logger.info({
    indexName,
    total: esBaseData.length,
    indexed,
    failed
  }, "loadInitialDataToDb: completed");

  return {
    indexName,
    total: esBaseData.length,
    indexed,
    failed,
    errors
  };
}
