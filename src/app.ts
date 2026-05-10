import express, { type Request, type Response } from "express";
import pinoHttp from "pino-http";
import { serve, setup } from "swagger-ui-express";

import { loadInitialDataToDb } from "./helpers/loadInitialDataToDb";
import { loadInitSummerize } from "./helpers/loadInitSummerize";
import { openApiDocument } from "./swagger";
import { logger } from "./utils/logger";

const app = express();

app.use(pinoHttp({ logger }));

app.get("/openapi.json", (_: Request, res: Response) => {
  res.json(openApiDocument);
});

app.use("/api-docs", serve, setup(openApiDocument));

app.get("/health", (_: Request, res: Response) => {
  res.send("Hello, World!");
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