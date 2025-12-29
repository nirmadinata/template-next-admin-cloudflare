"use client";

import type { TestimonialsSectionType } from "@/features/visitor-home/server/schemas";

import { Heading } from "../atoms";
import { TestimonialCarousel } from "../molecules";

interface TestimonialsCarouselSectionProps {
    data: TestimonialsSectionType;
    /**
     * Auto-play interval in milliseconds
     * @default 5000
     */
    autoPlayInterval?: number;
}

/**
 * Testimonials Carousel Section
 *
 * An alternative testimonials section that displays testimonials
 * in a carousel format instead of a grid.
 */
export function TestimonialsCarouselSection({
    data,
    autoPlayInterval = 5000,
}: TestimonialsCarouselSectionProps) {
    return (
        <section className="bg-muted/50 px-4 py-20">
            <div className="mx-auto max-w-4xl">
                <Heading level="h2" align="center" className="mb-12">
                    {data.heading}
                </Heading>
                <TestimonialCarousel
                    testimonials={data.testimonials}
                    autoPlayInterval={autoPlayInterval}
                />
            </div>
        </section>
    );
}
