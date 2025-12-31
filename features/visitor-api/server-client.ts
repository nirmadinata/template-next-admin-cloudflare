import { createRouterClient } from "@orpc/server";

import { visitorApiRouter } from "./router";

/**
 * Server-side Visitor API client
 *
 * Use this client for server components, server actions, and API routes.
 * Calls procedures directly without HTTP overhead.
 *
 * @example
 * ```ts
 * import { serverVisitorApiClient } from "@/features/visitor-api";
 *
 * const data = await serverVisitorApiClient.home.getHeroSection();
 * ```
 */
export const serverVisitorApiClient = createRouterClient(visitorApiRouter, {
    context: {},
});
