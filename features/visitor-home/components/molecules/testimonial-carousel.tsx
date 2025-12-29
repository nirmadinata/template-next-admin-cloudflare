"use client";

import type { TestimonialItemType } from "@/features/visitor-home/server/schemas";

import { useCallback, useEffect, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { TestimonialCard } from "./testimonial-card";
import { Button } from "@/components/ui/button";

interface TestimonialCarouselProps {
    testimonials: TestimonialItemType[];
    /**
     * Auto-play interval in milliseconds
     * Set to 0 to disable auto-play
     * @default 5000
     */
    autoPlayInterval?: number;
}

/**
 * Testimonial Carousel
 *
 * A carousel component that displays testimonials with
 * navigation controls and optional auto-play.
 */
export function TestimonialCarousel({
    testimonials,
    autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const goToPrev = useCallback(() => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    }, [testimonials.length]);

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (autoPlayInterval <= 0 || isPaused) return;

        const interval = setInterval(goToNext, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlayInterval, isPaused, goToNext]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                goToPrev();
            } else if (e.key === "ArrowRight") {
                goToNext();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToNext, goToPrev]);

    if (testimonials.length === 0) return null;

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Carousel container */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="w-full shrink-0 px-4"
                        >
                            <div className="mx-auto max-w-2xl">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation arrows */}
            {testimonials.length > 1 && (
                <>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full"
                        onClick={goToPrev}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-1/2 right-0 -translate-y-1/2 rounded-full"
                        onClick={goToNext}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </>
            )}

            {/* Dot indicators */}
            {testimonials.length > 1 && (
                <div className="mt-6 flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 w-2 rounded-full transition-colors ${
                                index === currentIndex
                                    ? "bg-primary"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
