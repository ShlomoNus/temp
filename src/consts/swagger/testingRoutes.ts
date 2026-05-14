export const testingSwaggerRoutes = {
  "/documents/ids": {
    get: {
      summary: "Get all Elasticsearch document ids",
      responses: {
        200: {
          description: "Document ids",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  ids: {
                    type: "array",
                    items: {
                      type: "string"
                    }
                  }
                },
                required: ["ids"]
              }
            }
          }
        },
        403: {
          description: "Endpoint is blocked outside testing environments",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse"
              }
            }
          }
        },
        500: {
          description: "Failed to fetch document ids",
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
  "/documents/{id}": {
    get: {
      summary: "Get Elasticsearch document by id",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string"
          }
        }
      ],
      responses: {
        200: {
          description: "Document",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  document: {
                    $ref: "#/components/schemas/EsDocument"
                  }
                },
                required: ["document"]
              }
            }
          }
        },
        403: {
          description: "Endpoint is blocked outside testing environments",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse"
              }
            }
          }
        },
        404: {
          description: "Document not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse"
              }
            }
          }
        },
        500: {
          description: "Failed to fetch document",
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
  "/documents": {
    get: {
      summary: "Get all Elasticsearch documents",
      responses: {
        200: {
          description: "Documents",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  documents: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/EsDocument"
                    }
                  }
                },
                required: ["documents"]
              }
            }
          }
        },
        403: {
          description: "Endpoint is blocked outside testing environments",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse"
              }
            }
          }
        },
        500: {
          description: "Failed to fetch documents",
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
  "/es/index": {
    delete: {
      summary: "Delete Elasticsearch index (ES_INDEX_NAME)",
      responses: {
        200: {
          description: "Index deleted or already absent",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  deleteResult: {
                    type: "object",
                    properties: {
                      indexName: { type: "string" },
                      deleted: { type: "boolean" },
                      message: { type: "string" }
                    },
                    required: ["indexName", "deleted"]
                  }
                },
                required: ["deleteResult"]
              }
            }
          }
        },
        403: {
          description: "Endpoint is blocked outside testing environments",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse"
              }
            }
          }
        },
        500: {
          description: "Failed to delete index",
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
