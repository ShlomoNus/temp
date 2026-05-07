import { cleanEnv, str } from "envalid";

export const CONFIG = cleanEnv(process.env, {
  AWS_REGION: str({ default: "il-central-1" }),
  S3_PDF_BUCKET: str({ default: "s3://earthquake-reports" }),
  SUMMERIZE_LAMBDA_NAME: str({ default: "" })
});
