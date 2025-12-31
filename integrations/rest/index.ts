/**
 * REST API Integration (Legacy Re-exports)
 *
 * @deprecated Use `@/features/visitor-api` for visitor endpoints
 * @deprecated Use `@/features/rpc` for admin/dashboard endpoints
 *
 * This module re-exports from the new feature-based structure
 * for backward compatibility.
 */

// Re-export from visitor-api feature
export {
    createVisitorApiHandler as createApiHandler,
    serverVisitorApiClient as serverApiClient,
    clientVisitorApiClient as clientApiClient,
    visitorOrpc as orpc,
    publicProcedure,
} from "@/features/visitor-api";

export type { VisitorApiRouter as AppRouter } from "@/features/visitor-api";
