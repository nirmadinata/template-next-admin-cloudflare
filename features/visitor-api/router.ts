import { homeRouter } from "@/features/visitor-home/server/router";

/**
 * Visitor API Router
 *
 * All public-facing feature routers are composed here.
 * Each feature exports its own router from the `server` folder.
 *
 * These endpoints are exposed via OpenAPI at /api/visitor
 */
export const visitorApiRouter = {
    home: homeRouter,
};

export type VisitorApiRouter = typeof visitorApiRouter;
