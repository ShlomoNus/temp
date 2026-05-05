import express, { type Request, type Response } from "express";

import { initHelper } from "./helpers/initHelper";

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/init", (_: Request, res: Response) => {
  res.json(initHelper());
});

export { app };