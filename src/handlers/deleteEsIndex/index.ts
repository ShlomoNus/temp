import { CONFIG } from "@/CONFIG";
import { esClient } from "@/utils/esClient";

export type DeleteEsIndexResult = {
  indexName: string
  deleted: boolean
  message?: string
};

export async function deleteEsIndex(): Promise<DeleteEsIndexResult> {
  const indexName = CONFIG.ES_INDEX_NAME.trim() || "earthquake-documents";

  const existed = await esClient.indices.exists({
    index: indexName
  });

  if (!existed) {
    return {
      indexName,
      deleted: false,
      message: "Index did not exist"
    };
  }

  await esClient.indices.delete({
    index: indexName
  });

  return {
    indexName,
    deleted: true,
    message: "Index deleted"
  };
}
