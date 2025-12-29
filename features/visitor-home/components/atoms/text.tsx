import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("", {
    variants: {
        variant: {
            body: "text-base",
            lead: "text-lg md:text-xl text-muted-foreground",
            small: "text-sm text-muted-foreground",
            muted: "text-muted-foreground",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
    },
    defaultVariants: {
        variant: "body",
        align: "left",
    },
});

interface TextProps
    extends
        React.HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof textVariants> {
    as?: "p" | "span" | "div";
}

export function Text({
    as: Component = "p",
    variant,
    align,
    className,
    children,
    ...props
}: TextProps) {
    return (
        <Component
            className={cn(textVariants({ variant, align }), className)}
            {...props}
        >
            {children}
        </Component>
    );
}
