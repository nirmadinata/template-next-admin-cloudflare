import type {
    FeaturesSectionType,
    HeroSectionType,
    HomePageDataType,
    StatsSectionType,
    TestimonialsSectionType,
} from "./schemas";

/**
 * Mock data for the visitor home page
 *
 * In a real application, this data would come from:
 * - Database (D1)
 * - CMS (headless)
 * - External API
 */

export const mockHeroSection: HeroSectionType = {
    title: "Build Modern Applications with Confidence",
    subtitle:
        "A comprehensive Next.js + Cloudflare template with authentication, database, and API infrastructure ready to go.",
    ctaText: "Get Started",
    ctaLink: "/dashboard",
    backgroundImage: undefined,
};

export const mockFeaturesSection: FeaturesSectionType = {
    heading: "Everything You Need",
    subheading:
        "Built with modern tools and best practices for rapid development",
    features: [
        {
            id: "feature-1",
            title: "Edge Computing",
            description:
                "Deploy globally on Cloudflare's edge network for ultra-low latency.",
            icon: "globe",
        },
        {
            id: "feature-2",
            title: "Type-Safe APIs",
            description: "End-to-end type safety with ORPC and Zod validation.",
            icon: "shield",
        },
        {
            id: "feature-3",
            title: "Authentication Ready",
            description:
                "Better Auth integration with OAuth providers and admin roles.",
            icon: "lock",
        },
        {
            id: "feature-4",
            title: "Database Included",
            description: "Cloudflare D1 with Drizzle ORM for serverless SQL.",
            icon: "database",
        },
        {
            id: "feature-5",
            title: "Internationalization",
            description:
                "Multi-language support with next-intl for global reach.",
            icon: "languages",
        },
        {
            id: "feature-6",
            title: "Modern UI",
            description:
                "Radix UI primitives with Tailwind CSS for beautiful interfaces.",
            icon: "palette",
        },
    ],
};

export const mockTestimonialsSection: TestimonialsSectionType = {
    heading: "Trusted by Developers",
    testimonials: [
        {
            id: "testimonial-1",
            quote: "This template saved us weeks of setup time. The ORPC integration is incredibly clean.",
            author: "Sarah Chen",
            role: "Senior Developer",
            company: "TechCorp",
            avatar: undefined,
        },
        {
            id: "testimonial-2",
            quote: "Finally, a Next.js template that works seamlessly with Cloudflare. The DX is fantastic.",
            author: "Marcus Rodriguez",
            role: "Lead Engineer",
            company: "StartupXYZ",
            avatar: undefined,
        },
        {
            id: "testimonial-3",
            quote: "The atomic design structure makes it easy for our team to collaborate on components.",
            author: "Emily Watson",
            role: "Frontend Architect",
            company: "DesignStudio",
            avatar: undefined,
        },
    ],
};

export const mockStatsSection: StatsSectionType = {
    heading: "Built for Scale",
    stats: [
        {
            id: "stat-1",
            value: "99.9",
            label: "Uptime",
            suffix: "%",
        },
        {
            id: "stat-2",
            value: "50",
            label: "Edge Locations",
            suffix: "+",
        },
        {
            id: "stat-3",
            value: "10",
            label: "Response Time",
            suffix: "ms",
        },
        {
            id: "stat-4",
            value: "1000",
            label: "Active Users",
            suffix: "+",
        },
    ],
};

export const mockHomePageData: HomePageDataType = {
    hero: mockHeroSection,
    features: mockFeaturesSection,
    testimonials: mockTestimonialsSection,
    stats: mockStatsSection,
};
