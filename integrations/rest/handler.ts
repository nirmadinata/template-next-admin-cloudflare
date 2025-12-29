import { OpenAPIHandler } from "@orpc/openapi/fetch";
import { onError } from "@orpc/server";

import { appRouter } from "./router";

/**
 * Create OpenAPI handler for Next.js API routes
 *
 * @param prefix - API route prefix (e.g., "/api/visitor")
 * @returns Handler function for Next.js route
 */
export function createApiHandler(prefix: `/${string}`) {
    const handler = new OpenAPIHandler(appRouter, {
        interceptors: [
            onError((error) => {
                console.error("[API Error]", error);
            }),
        ],
    });

    return async (request: Request) => {
        const { matched, response } = await handler.handle(request, {
            prefix,
            context: {},
        });

        if (matched) {
            return response;
        }

        return new Response("Not Found", { status: 404 });
    };
}
