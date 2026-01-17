import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";

import { rpcRouter } from "./router";

/**
 * Create RPC handler for Next.js API routes
 *
 * This handler uses standard ORPC (not OpenAPI) for internal admin endpoints.
 *
 * @returns Handler function for Next.js route
 */
export function createRpcHandler() {
    const handler = new RPCHandler(rpcRouter, {
        interceptors: [
            onError((error) => {
                console.error("[Admin RPC Error]", error);
            }),
        ],
    });

    return async (request: Request) => {
        const { matched, response } = await handler.handle(request, {
            prefix: "/api/admin",
            context: {},
        });

        if (matched) {
            return response;
        }

        return new Response("Not Found", { status: 404 });
    };
}
