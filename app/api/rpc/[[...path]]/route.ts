import { createRpcHandler } from "@/integrations/rpc";

/**
 * RPC Route Handler
 *
 * Handles all RPC endpoints.
 * Prefix: /api/rpc
 */
const handler = createRpcHandler();

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const OPTIONS = handler;
export const HEAD = handler;
