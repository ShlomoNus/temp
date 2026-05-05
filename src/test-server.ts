import { app } from "./app";

const PORT = Number(process.env.PORT) || 3080;

app.listen(PORT, () => {
  console.info(`Test server at http://127.0.0.1:${PORT}`);
});
