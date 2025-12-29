/**
 * REST API Integration
 *
 * This module provides ORPC-based REST API infrastructure.
 * - Server: OpenAPI handler for Next.js API routes
 * - Client: Type-safe clients for both server and client side
 */

export { createApiHandler } from "./handler";
export { serverApiClient } from "./server-client";
export { clientApiClient, orpc } from "./client-client";
export type { AppRouter } from "./router";
