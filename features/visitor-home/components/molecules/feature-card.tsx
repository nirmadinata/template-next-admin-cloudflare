import type { FeatureItemType } from "@/features/visitor-home/server/schemas";

import { Icon, Text } from "../atoms";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
    feature: FeatureItemType;
}

export function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <Card className="h-full transition-shadow hover:shadow-lg">
            <CardHeader className="pb-2">
                <div className="bg-primary/10 mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Icon
                        name={feature.icon}
                        size="lg"
                        className="text-primary"
                    />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <Text variant="muted">{feature.description}</Text>
            </CardContent>
        </Card>
    );
}
