import Link from "next/link";

import type { HeroSectionType as HeroSectionType } from "@/features/visitor-home/server/schemas";

import { Button } from "@/components/ui/button";

import { Heading, Text } from "../atoms";

interface HeroSectionProps {
    data: HeroSectionType;
}

export function HeroSection({ data }: HeroSectionProps) {
    return (
        <section className="relative flex min-h-[60vh] items-center justify-center px-4 py-20">
            <div className="mx-auto max-w-4xl text-center">
                <Heading level="h1" align="center" className="mb-6">
                    {data.title}
                </Heading>
                <Text
                    variant="lead"
                    align="center"
                    className="mx-auto mb-8 max-w-2xl"
                >
                    {data.subtitle}
                </Text>
                <Button asChild size="lg">
                    <Link href={data.ctaLink}>{data.ctaText}</Link>
                </Button>
            </div>
        </section>
    );
}
