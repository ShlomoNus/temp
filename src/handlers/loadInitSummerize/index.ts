import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda";

import { CONFIG } from "@/CONFIG";
import { esBaseData } from "@/handlers/loadInitialDataToDb/consts/data";

import { GetSummerizeResult } from "./types";

const {
  AWS_REGION,
  SUMMERIZE_LAMBDA_NAME
} = CONFIG;

export async function loadInitSummerize(): Promise<GetSummerizeResult> {
  const lambdaClient = new LambdaClient({
    region: AWS_REGION
  });
  const failed: number[] = [];

  for (const { id, fileUrl, type } of esBaseData) {
    try {
      await lambdaClient.send(
        new InvokeCommand({
          FunctionName: SUMMERIZE_LAMBDA_NAME,
          InvocationType: "Event",
          Payload: Buffer.from(JSON.stringify({ id, fileUrl, type }), "utf8")
        })
      );
    }
    catch {
      failed.push(id);
    }
  }

  return {
    lambdaName: SUMMERIZE_LAMBDA_NAME,
    totalFiles: esBaseData.length,
    queued: esBaseData.length - failed.length,
    failed
  };
}
