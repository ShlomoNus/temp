import { Router, type Request, type Response } from "express";
import { ZodError } from "zod";

import { addDocument } from "@/handlers/addDocument";
import { loadInitialDataToDb } from "@/handlers/loadInitialDataToDb";
import { loadInitSummerize } from "@/handlers/loadInitSummerize";
import { verifyEsBaseDataS3Urls } from "@/handlers/verifyEsBaseDataS3";
import { logger } from "@/utils/logger";

const setupRouter = Router();

setupRouter.post("/add", async(req: Request, res: Response) => {
  try {
    const { document } = await addDocument(req.body);

    res.status(201).json({ document });
  }
  catch(error: unknown) {
    if (error instanceof ZodError) {
      const firstIssue = error.issues[0];
      const message = error.issues.length === 1 && firstIssue !== undefined
        ? firstIssue.message
        : "Request validation failed";

      res.status(400).json({
        error: message,
        issues: error.issues
      });

      return;
    }

    logger.error({ err: error }, "addDocument: failed");
    const msg = error instanceof Error ? error.message : "Unknown add document error";

    res.status(500).json({ error: msg });
  }
});

setupRouter.get("/verifyEsBaseDataS3", async(_: Request, res: Response) => {
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

setupRouter.get("/loadInitInfo", async(_: Request, res: Response) => {
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

setupRouter.get("/loadInitSummerize", async(_: Request, res: Response) => {
  try {
    const summerizeResult = await loadInitSummerize();

    res.json({ summerizeResult });
  }
  catch(error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown init error";

    res.status(500).json({ error: message });
  }
});

export { setupRouter };
