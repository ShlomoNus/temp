import { app } from "./app";
import { logger } from "./utils/logger";

const PORT = Number(process.env.PORT) || 3080;

app.listen(PORT, () => {
  logger.info(`Test server at http://127.0.0.1:${PORT}`);
});
