import type { TestimonialItemType } from "@/features/visitor-home/server/schemas";

import { Text } from "../atoms";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TestimonialCardProps {
    testimonial: TestimonialItemType;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    const initials = testimonial.author
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

    return (
        <Card className="h-full">
            <CardContent className="pt-6">
                <blockquote className="text-lg italic">
                    &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
            </CardContent>
            <CardFooter className="flex items-center gap-4">
                <Avatar>
                    {testimonial.avatar && (
                        <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.author}
                        />
                    )}
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div>
                    <Text className="font-semibold">{testimonial.author}</Text>
                    <Text variant="small">
                        {testimonial.role} at {testimonial.company}
                    </Text>
                </div>
            </CardFooter>
        </Card>
    );
}
