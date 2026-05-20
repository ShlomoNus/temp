import { CONFIG } from "@/CONFIG";
import { logger } from "@/utils/logger";

export type GetSummariesOptions = {
  short: boolean
  long: boolean
};

export class AiService {
  static readonly aiLambdaUrl = CONFIG.AI_LAMBDA_URL;

  static getSummaries(options: GetSummariesOptions): void {
    const url = this.aiLambdaUrl.trim();

    if (!url) {
      throw new Error("AI_LAMBDA_URL is not configured");
    }

    void fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(options)
    }).catch((error: unknown) => {
      logger.error({ err: error, options }, "AiService.getSummaries: request failed");
    });
  }
}
