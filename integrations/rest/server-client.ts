import "server-only";

import { createRouterClient } from "@orpc/server";

import { appRouter } from "./router";

/**
 * Server-side API client
 *
 * Use this client for server components, server actions, and API routes.
 * Calls procedures directly without HTTP overhead.
 *
 * @example
 * ```ts
 * import { serverApiClient } from "@/integrations/rest";
 *
 * const data = await serverApiClient.visitor.home.getHeroSection();
 * ```
 */
export const serverApiClient = createRouterClient(appRouter, {
    context: {},
});
