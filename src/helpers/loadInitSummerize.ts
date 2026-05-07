import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";

import { CONFIG } from "../CONFIG";
import { files } from "../excelSource";

const {
  AWS_REGION,
  SUMMERIZE_LAMBDA_NAME
} = CONFIG;

type GetSummerizeResult = {
  lambdaName: string
  totalFiles: number
  queued: number
  failed: number[]
};

export async function loadInitSummerize(): Promise<GetSummerizeResult> {
  const lambdaClient = new LambdaClient({
    region: AWS_REGION
  });
  const failed: number[] = [];

  for (const { id, pdfUrl } of files) {
    try {
      await lambdaClient.send(
        new InvokeCommand({
          FunctionName: SUMMERIZE_LAMBDA_NAME,
          InvocationType: "Event",
          Payload: Buffer.from(JSON.stringify({ id, pdfUrl }), "utf8")
        })
      );
    }
    catch {
      failed.push(id);
    }
  }

  return {
    lambdaName: SUMMERIZE_LAMBDA_NAME,
    totalFiles: files.length,
    queued: files.length - failed.length,
    failed
  };
}
