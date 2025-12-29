import type { TestimonialsSectionType as TestimonialsSectionType } from "@/features/visitor-home/server/schemas";

import { Heading } from "../atoms";
import { TestimonialCard } from "../molecules";

interface TestimonialsSectionProps {
    data: TestimonialsSectionType;
}

export function TestimonialsSection({ data }: TestimonialsSectionProps) {
    return (
        <section className="bg-muted/50 px-4 py-20">
            <div className="mx-auto max-w-6xl">
                <Heading level="h2" align="center" className="mb-12">
                    {data.heading}
                </Heading>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {data.testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
