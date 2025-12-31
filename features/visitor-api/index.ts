/**
 * Visitor API Feature
 *
 * Public-facing OpenAPI infrastructure for visitor endpoints.
 * - Server: OpenAPI handler for Next.js API routes
 * - Client: Type-safe clients for both server and client side
 */

export { createVisitorApiHandler } from "./handler";
export { serverVisitorApiClient } from "./server-client";
export { clientVisitorApiClient, visitorOrpc } from "./client-client";
export { publicProcedure, base } from "./base";
export type { VisitorApiRouter } from "./router";
