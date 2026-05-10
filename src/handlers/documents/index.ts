import { estypes } from "@elastic/elasticsearch";

import { CONFIG } from "@/CONFIG";
import { FileItem } from "@/handlers/loadInitialDataToDb/types/data";
import { esClient } from "@/utils/esClient";

const {
  ES_INDEX_NAME
} = CONFIG;

const MAX_DOCUMENTS_SIZE = 10_000;

type EsDocument = FileItem & {
  createdAt?: string
  updatedAt?: string
};

function getIndexName(): string {
  return ES_INDEX_NAME.trim() || "earthquake-documents";
}

function mapSearchHit(hit: estypes.SearchHit<EsDocument>): EsDocument | undefined {
  return hit._source;
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

export async function getAllDocumentIds(): Promise<string[]> {
  const response = await esClient.search<EsDocument>({
    index: getIndexName(),
    size: MAX_DOCUMENTS_SIZE,
    _source: false,
    query: {
      match_all: {}
    }
  });

  return response.hits.hits.map(hit => hit._id).filter(isDefined);
}

export async function getDocumentById(id: string): Promise<EsDocument | null> {
  const response = await esClient.search<EsDocument>({
    index: getIndexName(),
    size: 1,
    query: {
      ids: {
        values: [id]
      }
    }
  });

  return response.hits.hits[0]?._source ?? null;
}

export async function getAllDocuments(): Promise<EsDocument[]> {
  const response = await esClient.search<EsDocument>({
    index: getIndexName(),
    size: MAX_DOCUMENTS_SIZE,
    query: {
      match_all: {}
    }
  });

  return response.hits.hits.map(mapSearchHit).filter(isDefined);
}
