import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";

import { appRouter } from "./router";

/**
 * Create RPC handler for Next.js API routes
 *
 * This handler uses standard ORPC for all endpoints.
 *
 * @returns Handler function for Next.js route
 */
export function createRpcHandler() {
    const handler = new RPCHandler(appRouter, {
        interceptors: [
            onError((error) => {
                console.error("[RPC Error]", error);
            }),
        ],
    });

    return async (request: Request) => {
        const { matched, response } = await handler.handle(request, {
            prefix: "/api/rpc",
            context: {},
        });

        if (matched) {
            return response;
        }

        return new Response("Not Found", { status: 404 });
    };
}
