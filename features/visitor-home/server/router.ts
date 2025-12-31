import {
    getFeaturesSection,
    getHeroSection,
    getHomePageData,
    getStatsSection,
    getTestimonialsSection,
} from "./procedures";

/**
 * Visitor Home Router
 *
 * Handles all public-facing home page API endpoints.
 * All procedures in this router are public (no auth required).
 */
export const homeRouter = {
    getHeroSection,
    getFeaturesSection,
    getTestimonialsSection,
    getStatsSection,
    getHomePageData,
};

export type VisitorHomeRouter = typeof homeRouter;
