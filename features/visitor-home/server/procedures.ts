import {
    mockFeaturesSection,
    mockHeroSection,
    mockHomePageData,
    mockStatsSection,
    mockTestimonialsSection,
} from "./mock-data";
import {
    FeaturesSectionSchema,
    HeroSectionSchema,
    HomePageDataSchema,
    StatsSectionSchema,
    TestimonialsSectionSchema,
} from "./schemas";
import { publicProcedure } from "@/features/visitor-api";

/**
 * Get Hero Section
 *
 * Returns the hero section data for the home page.
 */
export const getHeroSection = publicProcedure
    .route({
        method: "GET",
        path: "/home/hero",
        summary: "Get hero section",
        description: "Returns the hero section data for the home page",
        tags: ["visitor", "home"],
    })
    .output(HeroSectionSchema)
    .handler(async () => {
        // Simulate async data fetching
        await new Promise((resolve) => setTimeout(resolve, 100));
        return mockHeroSection;
    });

/**
 * Get Features Section
 *
 * Returns the features section data for the home page.
 */
export const getFeaturesSection = publicProcedure
    .route({
        method: "GET",
        path: "/home/features",
        summary: "Get features section",
        description: "Returns the features section data for the home page",
        tags: ["visitor", "home"],
    })
    .output(FeaturesSectionSchema)
    .handler(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        return mockFeaturesSection;
    });

/**
 * Get Testimonials Section
 *
 * Returns the testimonials section data for the home page.
 */
export const getTestimonialsSection = publicProcedure
    .route({
        method: "GET",
        path: "/home/testimonials",
        summary: "Get testimonials section",
        description: "Returns the testimonials section data for the home page",
        tags: ["visitor", "home"],
    })
    .output(TestimonialsSectionSchema)
    .handler(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        return mockTestimonialsSection;
    });

/**
 * Get Stats Section
 *
 * Returns the stats section data for the home page.
 */
export const getStatsSection = publicProcedure
    .route({
        method: "GET",
        path: "/home/stats",
        summary: "Get stats section",
        description: "Returns the stats section data for the home page",
        tags: ["visitor", "home"],
    })
    .output(StatsSectionSchema)
    .handler(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        return mockStatsSection;
    });

/**
 * Get All Home Page Data
 *
 * Returns all sections for the home page in a single request.
 * Useful for initial page load.
 */
export const getHomePageData = publicProcedure
    .route({
        method: "GET",
        path: "/home",
        summary: "Get all home page data",
        description: "Returns all sections for the home page",
        tags: ["visitor", "home"],
    })
    .output(HomePageDataSchema)
    .handler(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        return mockHomePageData;
    });
