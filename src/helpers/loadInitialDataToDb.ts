import { EsBulkResponse } from "@/types/es";

import { CONFIG } from "../CONFIG";
import { files } from "../excelSource";

import { ensureIndexExists, esRequest, parseJsonSafe } from "../utils/esClient";

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

const ES_INDEX_MAPPING_BODY = JSON.stringify({
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
});

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const out: T[][] = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    out.push(arr.slice(i, i + chunkSize));
  }

  return out;
}

function buildBulkPayload(nowIso: string, chunk: typeof files): string {
  return chunk
    .map(item => {
      const action = { index: { _id: String(item.id) } };
      const doc = {
        ...item,
        createdAt: nowIso,
        updatedAt: nowIso
      };

      return `${JSON.stringify(action)}\n${JSON.stringify(doc)}`;
    })
    .join("\n")
    .concat("\n");
}

export async function loadInitialDataToDb(): Promise<LoadInitialDataResult> {
  const indexName = ES_INDEX_NAME.trim() || "earthquake-documents";

  await ensureIndexExists(indexName, ES_INDEX_MAPPING_BODY);

  const nowIso = new Date().toISOString();
  const chunks = chunkArray(files, BULK_CHUNK_SIZE);
  const errors: string[] = [];
  let indexed = 0;
  let failed = 0;

  for (const chunk of chunks) {
    const payload = buildBulkPayload(nowIso, chunk);
    const bulkResponse = await esRequest({
      method: "POST",
      path: `/${encodeURIComponent(indexName)}/_bulk?refresh=wait_for`,
      body: payload,
      contentType: "application/x-ndjson"
    });

    if (!bulkResponse.ok) {
      const text = await bulkResponse.text();

      throw new Error(`Bulk request failed: ${text || bulkResponse.statusText}`);
    }

    const parsed = await parseJsonSafe<EsBulkResponse>(bulkResponse);
    const items = parsed?.items ?? [];

    for (const item of items) {
      const indexResult = item.index;

      if (!indexResult) {
        failed += 1;
        continue;
      }

      if ((indexResult.status ?? 500) >= 300) {
        failed += 1;
        errors.push(
          `${indexResult._id ?? "unknown"}: ${indexResult.error?.type ?? "error"} ${indexResult.error?.reason ?? ""}`.trim()
        );
      }
      else {
        indexed += 1;
      }
    }
  }

  return {
    indexName,
    total: files.length,
    indexed,
    failed,
    errors
  };
}
