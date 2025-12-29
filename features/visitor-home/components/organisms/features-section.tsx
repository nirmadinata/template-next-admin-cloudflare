import type { FeaturesSectionType as FeaturesSectionType } from "@/features/visitor-home/server/schemas";

import { Heading, Text } from "../atoms";
import { FeatureCard } from "../molecules";

interface FeaturesSectionProps {
    data: FeaturesSectionType;
}

export function FeaturesSection({ data }: FeaturesSectionProps) {
    return (
        <section className="px-4 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <Heading level="h2" align="center" className="mb-4">
                        {data.heading}
                    </Heading>
                    <Text
                        variant="lead"
                        align="center"
                        className="mx-auto max-w-2xl"
                    >
                        {data.subheading}
                    </Text>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.features.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
