import { Client, estypes } from "@elastic/elasticsearch";

import { CONFIG } from "../CONFIG";

const {
  ES_API_KEY,
  ES_ENDPOINT,
  ES_PASSWORD,
  ES_USERNAME
} = CONFIG;

function createEsClient(): Client {
  const endpoint = ES_ENDPOINT?.trim();

  if (!endpoint) {
    throw new Error("Missing ES_ENDPOINT env var");
  }

  const apiKey = ES_API_KEY?.trim();
  const username = ES_USERNAME?.trim();
  const password = ES_PASSWORD?.trim();

  if (apiKey) {
    return new Client({
      node: endpoint,
      auth: {
        apiKey
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  if (username && password) {
    return new Client({
      node: endpoint,
      auth: {
        username,
        password
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  return new Client({
    node: endpoint,
    tls: {
      rejectUnauthorized: false
    }
  });
}

export const esClient = createEsClient();

export async function ensureIndexExists(
  indexName: string,
  indexBody: Omit<estypes.IndicesCreateRequest, "index">
): Promise<void> {
  const exists = await esClient.indices.exists({
    index: indexName
  });

  if (exists) {
    return;
  }

  await esClient.indices.create({
    index: indexName,
    ...indexBody
  });
}