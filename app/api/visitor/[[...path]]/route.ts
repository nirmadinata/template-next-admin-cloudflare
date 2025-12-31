import { createVisitorApiHandler } from "@/features/visitor-api";

/**
 * Visitor API Route Handler
 *
 * Handles all visitor-related API endpoints via ORPC OpenAPI.
 * Prefix: /api/visitor
 */
const handler = createVisitorApiHandler();

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const OPTIONS = handler;
export const HEAD = handler;
