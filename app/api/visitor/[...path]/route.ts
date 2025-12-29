import { createApiHandler } from "@/integrations/rest";

/**
 * Visitor API Route Handler
 *
 * Handles all visitor-related API endpoints via ORPC.
 * Prefix: /api/visitor
 */
const handler = createApiHandler("/api/visitor");

export const GET = handler;
export const POST = handler;
