import { os } from "@orpc/server";

/**
 * Base ORPC instance for creating RPC procedures.
 * All procedures should extend from this base.
 */
export const base = os;

/**
 * Public procedure - no authentication required
 * Use this for visitor-facing endpoints that don't require auth.
 */
export const publicProcedure = base;

/**
 * Authenticated procedure - requires authenticated user
 * Use this for endpoints that require any authenticated user.
 *
 * TODO: Add authentication middleware when implementing auth flows
 */
export const authProcedure = base;

/**
 * Admin procedure - requires admin role
 * Use this for endpoints that require admin privileges.
 *
 * TODO: Add admin role check middleware when implementing auth flows
 */
export const adminProcedure = base;
