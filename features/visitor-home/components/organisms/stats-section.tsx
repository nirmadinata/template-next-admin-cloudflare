import type { StatsSectionType as StatsSectionType } from "@/features/visitor-home/server/schemas";

import { Heading } from "../atoms";
import { StatCard } from "../molecules";

interface StatsSectionProps {
    data: StatsSectionType;
}

export function StatsSection({ data }: StatsSectionProps) {
    return (
        <section className="px-4 py-20">
            <div className="mx-auto max-w-4xl">
                <Heading level="h2" align="center" className="mb-12">
                    {data.heading}
                </Heading>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {data.stats.map((stat) => (
                        <StatCard key={stat.id} stat={stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
