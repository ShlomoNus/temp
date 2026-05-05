import express, { type Request, type Response } from "express";

import { initHelper } from "./helpers/initHelper";

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/init", async(_: Request, res: Response) => {
  const result = await initHelper();

  res.json({ status: result.status, timestamp: result.timestamp });
});

export { app };