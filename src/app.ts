import { type IncomingMessage, type ServerResponse } from "http";

import express, { type Request, type Response } from "express";
import { pinoHttp } from "pino-http";
import { serve, setup } from "swagger-ui-express";

import { openApiDocument } from "./consts/swagger";
import {
  getAllDocumentIds,
  getAllDocuments,
  getDocumentById
} from "./handlers/documents";
import { loadInitialDataToDb } from "./handlers/loadInitialDataToDb";
import { loadInitSummerize } from "./handlers/loadInitSummerize";
import { isTestingEnvironment } from "./utils/general";
import { logger } from "./utils/logger";

const app = express();
const isTestingEndpointEnabled = isTestingEnvironment();

function blockTestingEndpointAccess(res: Response): boolean {
  if (isTestingEndpointEnabled) {
    return false;
  }

  res.status(403).json({
    error: "This endpoint is available only in testing environments"
  });

  return true;
}

app.use(pinoHttp({
  logger,
  serializers: {
    req(request: IncomingMessage) {
      return {
        method: request.method,
        url: request.url
      };
    },
    res(response: ServerResponse) {
      return {
        statusCode: response.statusCode
      };
    }
  }
}));

if (isTestingEndpointEnabled) {
  app.get("/openapi.json", (_: Request, res: Response) => {
    res.json(openApiDocument);
  });

  app.use("/api-docs", serve, setup(openApiDocument));
}

app.get("/health", (_: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/documents/ids", async(_: Request, res: Response) => {
  if (blockTestingEndpointAccess(res)) {
    return;
  }

  try {
    const ids = await getAllDocumentIds();

    res.json({ ids });
  }
  catch(error: unknown) {
    logger.error({ err: error }, "documents: failed to get document ids");
    const message = error instanceof Error ? error.message : "Unknown documents ids error";

    res.status(500).json({ error: message });
  }
});

app.get("/documents/:id", async(req: Request, res: Response) => {
  if (blockTestingEndpointAccess(res)) {
    return;
  }

  try {
    const documentId = req.params.id;

    if (!documentId || Array.isArray(documentId)) {
      res.status(400).json({ error: "Missing document id" });

      return;
    }

    const document = await getDocumentById(documentId);

    if (!document) {
      res.status(404).json({ error: "Document not found" });

      return;
    }

    res.json({ document });
  }
  catch(error: unknown) {
    logger.error({ err: error }, "documents: failed to get document by id");
    const message = error instanceof Error ? error.message : "Unknown document error";

    res.status(500).json({ error: message });
  }
});

app.get("/documents", async(_: Request, res: Response) => {
  if (blockTestingEndpointAccess(res)) {
    return;
  }

  try {
    const documents = await getAllDocuments();

    res.json({ documents });
  }
  catch(error: unknown) {
    logger.error({ err: error }, "documents: failed to get documents");
    const message = error instanceof Error ? error.message : "Unknown documents error";

    res.status(500).json({ error: message });
  }
});

app.get("/loadInitInfo", async(_: Request, res: Response) => {
  try {
    logger.info("loadInitInfo: starting initial data load");
    const initResult = await loadInitialDataToDb();

    logger.info(
      {
        total: initResult.total,
        indexed: initResult.indexed,
        failed: initResult.failed
      },
      `loadInitInfo: completed initial data load for index ${initResult.indexName}`
    );

    res.json({ initResult });
  }
  catch(error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown init error";

    logger.error({ err: error }, "loadInitInfo: failed initial data load");

    res.status(500).json({ error: message });
  }
});

app.get("/loadInitSummerize", async(_: Request, res: Response) => {
  try {
    const summerizeResult = await loadInitSummerize();

    res.json({ summerizeResult });
  }
  catch(error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown init error";

    res.status(500).json({ error: message });
  }
});

export { app };