export const swaggerRoutes = {
  "/health": {
    get: {
      summary: "Health check",
      responses: {
        200: {
          description: "Server is running",
          content: {
            "text/plain": {
              schema: {
                type: "string",
                example: "Hello, World!"
              }
            }
          }
        }
      }
    }
  },
  "/loadInitInfo": {
    get: {
      summary: "Load initial Elasticsearch data",
      responses: {
        200: {
          description: "Initial data load result",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  initResult: {
                    type: "object"
                  }
                },
                required: ["initResult"]
              }
            }
          }
        },
        500: {
          description: "Initial data load failed",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse"
              }
            }
          }
        }
      }
    }
  },
  "/loadInitSummerize": {
    get: {
      summary: "Queue initial summarize Lambda jobs",
      responses: {
        200: {
          description: "Summarize queue result",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  summerizeResult: {
                    type: "object",
                    properties: {
                      lambdaName: {
                        type: "string"
                      },
                      totalFiles: {
                        type: "number"
                      },
                      queued: {
                        type: "number"
                      },
                      failed: {
                        type: "array",
                        items: {
                          type: "number"
                        }
                      }
                    },
                    required: ["lambdaName", "totalFiles", "queued", "failed"]
                  }
                },
                required: ["summerizeResult"]
              }
            }
          }
        },
        500: {
          description: "Summarize queueing failed",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse"
              }
            }
          }
        }
      }
    }
  }
} as const;
