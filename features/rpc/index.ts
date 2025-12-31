/**
 * RPC Feature
 *
 * Internal RPC infrastructure for admin and dashboard endpoints.
 * - Server: RPC handler for Next.js API routes
 * - Client: Type-safe clients for both server and client side
 * - Auth: Authenticated and admin procedures
 */

export { createRpcHandler } from "./handler";
export { serverRpcClient } from "./server-client";
export { clientRpcClient, adminOrpc } from "./client-client";
export { authProcedure, adminProcedure, base } from "./base";
export type { RpcRouter } from "./router";
