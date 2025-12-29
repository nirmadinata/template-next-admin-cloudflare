"use client";

import { useEffect, useRef, useState } from "react";

import type { StatItemType } from "@/features/visitor-home/server/schemas";

import { Heading, Text } from "../atoms";

interface StatCardProps {
    stat: StatItemType;
    /**
     * Enable animation when card enters viewport
     * @default true
     */
    animate?: boolean;
    /**
     * Animation duration in milliseconds
     * @default 2000
     */
    duration?: number;
}

/**
 * Animated Stat Card
 *
 * Displays a statistic with an optional counting animation
 * that triggers when the card enters the viewport.
 */
export function StatCard({
    stat,
    animate = true,
    duration = 2000,
}: StatCardProps) {
    const [displayValue, setDisplayValue] = useState(
        animate ? "0" : stat.value
    );
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!animate || hasAnimated) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateValue();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [animate, hasAnimated]);

    const animateValue = () => {
        const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ""));

        if (isNaN(numericValue)) {
            setDisplayValue(stat.value);
            return;
        }

        const startTime = performance.now();
        const isDecimal = stat.value.includes(".");

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = numericValue * easeOut;

            if (isDecimal) {
                setDisplayValue(currentValue.toFixed(1));
            } else {
                setDisplayValue(Math.floor(currentValue).toString());
            }

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setDisplayValue(stat.value);
            }
        };

        requestAnimationFrame(step);
    };

    return (
        <div ref={ref} className="text-center">
            <Heading level="h2" align="center" className="text-primary">
                {displayValue}
                {stat.suffix && (
                    <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                )}
            </Heading>
            <Text variant="muted" align="center" className="mt-1">
                {stat.label}
            </Text>
        </div>
    );
}
