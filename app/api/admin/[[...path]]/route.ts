import { createRpcHandler } from "@/features/rpc";

/**
 * Admin RPC Route Handler
 *
 * Handles all admin-related RPC endpoints.
 * Prefix: /api/admin
 */
const handler = createRpcHandler();

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const OPTIONS = handler;
export const HEAD = handler;
