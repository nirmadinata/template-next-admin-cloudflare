import { os } from "@orpc/server";

/**
 * Base ORPC instance for creating procedures.
 * All procedures should extend from this base.
 */
export const base = os;

/**
 * Public procedure - no authentication required
 * Use this for visitor-facing endpoints that don't require auth.
 */
export const publicProcedure = base;
