import { visitorRouter } from "@/features/visitor-home/server/router";

/**
 * Main application router
 *
 * All feature routers are composed here.
 * Each feature exports its own router from the `server` folder.
 */
export const appRouter = {
    visitor: visitorRouter,
};

export type AppRouter = typeof appRouter;
