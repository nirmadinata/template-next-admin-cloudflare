import "server-only";

import { createRouterClient } from "@orpc/server";

import { rpcRouter } from "./router";

/**
 * Server-side RPC client for Admin/Dashboard
 *
 * Use this client for server components, server actions, and API routes.
 * Calls procedures directly without HTTP overhead.
 *
 * @example
 * ```ts
 * import { serverRpcClient } from "@/features/rpc";
 *
 * const users = await serverRpcClient.users.list();
 * ```
 */
export const serverRpcClient = createRouterClient(rpcRouter, {
    context: {},
});
