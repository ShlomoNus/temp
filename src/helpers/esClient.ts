import { EsRequestParams } from "@/types/es";

import { CONFIG } from "../CONFIG";

const {
  ES_API_KEY,
  ES_ENDPOINT,
  ES_PASSWORD,
  ES_USERNAME
} = CONFIG;

function getAuthHeader(): string | undefined {
  if (ES_API_KEY.trim()) {
    return `ApiKey ${ES_API_KEY.trim()}`;
  }

  if (ES_USERNAME.trim() && ES_PASSWORD.trim()) {
    const token = Buffer.from(`${ES_USERNAME.trim()}:${ES_PASSWORD.trim()}`).toString("base64");

    return `Basic ${token}`;
  }

  return undefined;
}

function normalizeEndpoint(endpoint: string): string {
  const normalized = endpoint.trim();

  if (!normalized) {
    throw new Error("Missing ES_ENDPOINT env var");
  }

  return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized;
}

export async function parseJsonSafe<T>(response: Response): Promise<T | undefined> {
  const text = await response.text();

  if (!text.trim()) {
    return undefined;
  }

  return JSON.parse(text) as T;
}

export async function esRequest(params: EsRequestParams): Promise<Response> {
  const {
    method,
    path,
    body,
    contentType = "application/json"
  } = params;
  const endpoint = normalizeEndpoint(ES_ENDPOINT);
  const auth = getAuthHeader();
  const headers: Record<string, string> = {
    "Accept": "application/json",
    "Content-Type": contentType
  };

  if (auth) {
    headers.Authorization = auth;
  }

  return fetch(`${endpoint}${path}`, {
    method,
    headers,
    body
  });
}

export async function ensureIndexExists(indexName: string, mappingBody: string): Promise<void> {
  const existsResponse = await esRequest({
    method: "HEAD",
    path: `/${encodeURIComponent(indexName)}`
  });

  if (existsResponse.status === 200) {
    return;
  }

  if (existsResponse.status !== 404) {
    throw new Error(`Failed checking index "${indexName}" existence: HTTP ${existsResponse.status}`);
  }

  const createResponse = await esRequest({
    method: "PUT",
    path: `/${encodeURIComponent(indexName)}`,
    body: mappingBody
  });

  if (!createResponse.ok) {
    const errorText = await createResponse.text();

    throw new Error(`Failed creating index "${indexName}": ${errorText || createResponse.statusText}`);
  }
}
