import type { Handler } from "aws-lambda";

/** AWS Lambda handler — set handler to `index.handler` in Lambda config */
export const handler: Handler = async(event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda", event, requestId: context.awsRequestId })
  };
};
