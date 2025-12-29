import { os } from "@orpc/server";

/**
 * Base ORPC instance for creating procedures.
 * All procedures should extend from this base.
 */
export const base = os;

/**
 * Public procedure - no authentication required
 */
export const publicProcedure = base;
