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
import { publicProcedure } from "@/integrations/rpc";

/**
 * Get Hero Section
 *
 * Returns the hero section data for the home page.
 */
export const getHeroSection = publicProcedure
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
    .output(HomePageDataSchema)
    .handler(async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        return mockHomePageData;
    });
