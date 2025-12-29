import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold tracking-tight", {
    variants: {
        level: {
            h1: "text-4xl md:text-5xl lg:text-6xl",
            h2: "text-3xl md:text-4xl",
            h3: "text-2xl md:text-3xl",
            h4: "text-xl md:text-2xl",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
    },
    defaultVariants: {
        level: "h1",
        align: "left",
    },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps
    extends
        React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof headingVariants> {
    as?: HeadingLevel;
}

export function Heading({
    as,
    level = "h1",
    align,
    className,
    children,
    ...props
}: HeadingProps) {
    const Component = as ?? level ?? "h1";

    return (
        <Component
            className={cn(headingVariants({ level, align }), className)}
            {...props}
        >
            {children}
        </Component>
    );
}
