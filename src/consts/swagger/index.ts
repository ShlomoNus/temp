import { isTestingEnvironment } from "@/utils/general";

import { swaggerRoutes } from "./routes";
import { testingSwaggerRoutes } from "./testingRoutes";

const shouldAddTestingSwaggerRoutes = isTestingEnvironment();

export const openApiDocument = {
  openapi: "3.0.3",
  info: {
    title: "Service Setup API",
    version: "1.0.0",
    description: "Local API for loading earthquake report data and queueing summarize jobs."
  },
  servers: [
    {
      url: "/",
      description: "Current server"
    }
  ],
  paths: {
    ...swaggerRoutes,
    ...(shouldAddTestingSwaggerRoutes ? testingSwaggerRoutes : {})
  },
  components: {
    schemas: {
      EsDocument: {
        type: "object",
        properties: {
          id: {
            type: "number"
          },
          name: {
            type: "string"
          },
          fileUrl: {
            type: "string"
          },
          type: {
            type: "string",
            enum: ["docs", "images", "audio", "video"]
          },
          mediaType: {
            type: "string",
            enum: ["audio", "video", "leaflets", "studies", "guides", "reports", "plans"]
          },
          category: {
            type: "string"
          },
          subCategory: {
            type: "string"
          },
          language: {
            type: "string"
          },
          isPublish: {
            type: "boolean"
          },
          status: {
            type: "string"
          },
          createdAt: {
            type: "string"
          },
          updatedAt: {
            type: "string"
          }
        }
      },
      ErrorResponse: {
        type: "object",
        properties: {
          error: {
            type: "string"
          }
        },
        required: ["error"]
      }
    }
  }
} as const;
