import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { OpenAPIReferencePlugin } from "@orpc/openapi/plugins";
import { onError } from "@orpc/server";
import { ZodToJsonSchemaConverter } from "@orpc/zod";

import { visitorApiRouter } from "./router";

/**
 * Create OpenAPI handler for Next.js API routes
 *
 * @returns Handler function for Next.js route
 */
export function createVisitorApiHandler() {
    const handler = new OpenAPIHandler(visitorApiRouter, {
        plugins: [
            new OpenAPIReferencePlugin({
                schemaConverters: [new ZodToJsonSchemaConverter()],
                specGenerateOptions: {
                    info: {
                        title: "Visitor API",
                        version: "0.1.0",
                        description: "Public-facing API endpoints for visitors",
                    },
                },
            }),
        ],
        interceptors: [
            onError((error) => {
                console.error("[Visitor API Error]", error);
            }),
        ],
    });

    return async (request: Request) => {
        const { matched, response } = await handler.handle(request, {
            prefix: "/api/visitor",
            context: {},
        });

        if (matched) {
            return response;
        }

        return new Response("Not Found", { status: 404 });
    };
}
