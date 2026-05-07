import express, { type Request, type Response } from "express";

import { loadInitialDataToDb } from "./helpers/loadInitialDataToDb";
import { loadInitSummerize } from "./helpers/loadInitSummerize";

const app = express();

app.get("/health", (_: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/loadInitInfo", async(_: Request, res: Response) => {
  try {
    const initResult = await loadInitialDataToDb();
    const summerizeResult = await loadInitSummerize();

    res.json({
      initResult,
      summerizeResult
    });
  }
  catch(error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown init error";

    res.status(500).json({ error: message });
  }
});

export { app };