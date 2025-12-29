import { z } from "zod";

/**
 * Hero Section Schema
 */
export const HeroSectionSchema = z.object({
    title: z.string(),
    subtitle: z.string(),
    ctaText: z.string(),
    ctaLink: z.string(),
    backgroundImage: z.string().optional(),
});

export type HeroSectionType = z.infer<typeof HeroSectionSchema>;

/**
 * Feature Item Schema
 */
export const FeatureItemSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
});

export type FeatureItemType = z.infer<typeof FeatureItemSchema>;

/**
 * Features Section Schema
 */
export const FeaturesSectionSchema = z.object({
    heading: z.string(),
    subheading: z.string(),
    features: z.array(FeatureItemSchema),
});

export type FeaturesSectionType = z.infer<typeof FeaturesSectionSchema>;

/**
 * Testimonial Item Schema
 */
export const TestimonialItemSchema = z.object({
    id: z.string(),
    quote: z.string(),
    author: z.string(),
    role: z.string(),
    company: z.string(),
    avatar: z.string().optional(),
});

export type TestimonialItemType = z.infer<typeof TestimonialItemSchema>;

/**
 * Testimonials Section Schema
 */
export const TestimonialsSectionSchema = z.object({
    heading: z.string(),
    testimonials: z.array(TestimonialItemSchema),
});

export type TestimonialsSectionType = z.infer<typeof TestimonialsSectionSchema>;

/**
 * Stat Item Schema
 */
export const StatItemSchema = z.object({
    id: z.string(),
    value: z.string(),
    label: z.string(),
    suffix: z.string().optional(),
});

export type StatItemType = z.infer<typeof StatItemSchema>;

/**
 * Stats Section Schema
 */
export const StatsSectionSchema = z.object({
    heading: z.string(),
    stats: z.array(StatItemSchema),
});

export type StatsSectionType = z.infer<typeof StatsSectionSchema>;

/**
 * Complete Home Page Data Schema
 */
export const HomePageDataSchema = z.object({
    hero: HeroSectionSchema,
    features: FeaturesSectionSchema,
    testimonials: TestimonialsSectionSchema,
    stats: StatsSectionSchema,
});

export type HomePageDataType = z.infer<typeof HomePageDataSchema>;
