import path from "path";

import { config as loadEnv } from "dotenv";
import { bool, cleanEnv, str } from "envalid";

const cwd = process.cwd();

loadEnv({ path: path.resolve(cwd, ".env") });
loadEnv({
  path: path.resolve(cwd, ".env.secret"),
  override: true
});

export const CONFIG = cleanEnv(process.env, {
  AWS_REGION: str({ default: "il-central-1" }),
  LOG_LEVEL: str({ default: "info" }),
  LOG_PRETTY: bool({ default: false }),
  S3_PDF_BUCKET: str({ default: "s3://earthquake-reports" }),
  SUMMERIZE_LAMBDA_NAME: str({ default: "" }),
  ES_ENDPOINT: str({ default: "" }),
  ES_INDEX_NAME: str({ default: "earthquake-documents" }),
  ES_API_KEY: str({ default: "" }),
  ES_USERNAME: str({ default: "" }),
  ES_PASSWORD: str({ default: "" }),
  ES_TLS_REJECT_UNAUTHORIZED: bool({ default: true })
});
