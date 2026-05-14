import { type IncomingMessage, type ServerResponse } from "http";

import express, { type Request, type Response } from "express";
import { pinoHttp } from "pino-http";
import { serve, setup } from "swagger-ui-express";

import { openApiDocument } from "./consts/swagger";
import { deleteEsIndex } from "./handlers/deleteEsIndex";
import { ensureEsDocumentsIndex } from "./handlers/ensureEsIndex";
import {
  getAllDocumentIds,
  getAllDocuments,
  getDocumentById
} from "./handlers/documents";
import { loadInitialDataToDb } from "./handlers/loadInitialDataToDb";
import { loadInitSummerize } from "./handlers/loadInitSummerize";
import { verifyEsBaseDataS3Urls } from "./handlers/verifyEsBaseDataS3";
import { testingEndpointAccessMiddleware } from "./middleware/testingEndpointAccess";
import { logger } from "./utils/logger";

const app = express();

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

app.get("/openapi.json", testingEndpointAccessMiddleware, (_: Request, res: Response) => {
  res.json(openApiDocument);
});

app.use("/api-docs", testingEndpointAccessMiddleware, serve, setup(openApiDocument));

app.get("/health", (_: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/documents/ids", testingEndpointAccessMiddleware, async(_: Request, res: Response) => {
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

app.get("/documents/:id", testingEndpointAccessMiddleware, async(req: Request, res: Response) => {
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

app.get("/documents", testingEndpointAccessMiddleware, async(_: Request, res: Response) => {
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

app.put("/es/index", testingEndpointAccessMiddleware, async(_: Request, res: Response) => {
  try {
    const ensureResult = await ensureEsDocumentsIndex();

    logger.info({ ensureResult }, "ensureEsIndex: completed");

    res.json({ ensureResult });
  }
  catch(error: unknown) {
    logger.error({ err: error }, "ensureEsIndex: failed");
    const message = error instanceof Error ? error.message : "Unknown ensure index error";

    res.status(500).json({ error: message });
  }
});

app.delete("/es/index", testingEndpointAccessMiddleware, async(_: Request, res: Response) => {
  try {
    const deleteResult = await deleteEsIndex();

    logger.info({ deleteResult }, "deleteEsIndex: completed");

    res.json({ deleteResult });
  }
  catch(error: unknown) {
    logger.error({ err: error }, "deleteEsIndex: failed");
    const message = error instanceof Error ? error.message : "Unknown delete index error";

    res.status(500).json({ error: message });
  }
});

app.get("/verifyEsBaseDataS3", async(_: Request, res: Response) => {
  try {
    const verifyResult = await verifyEsBaseDataS3Urls();

    res.json({ verifyResult });
  }
  catch(error: unknown) {
    logger.error({ err: error }, "verifyEsBaseDataS3: failed");
    const message = error instanceof Error ? error.message : "Unknown S3 verify error";

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