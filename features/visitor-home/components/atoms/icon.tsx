import {
    Database,
    Globe,
    Languages,
    Lock,
    LucideIcon,
    Palette,
    Shield,
} from "lucide-react";

import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
    globe: Globe,
    shield: Shield,
    lock: Lock,
    database: Database,
    languages: Languages,
    palette: Palette,
};

interface IconProps extends React.HTMLAttributes<SVGElement> {
    name: string;
    size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
};

export function Icon({ name, size = "md", className, ...props }: IconProps) {
    const IconComponent = iconMap[name];

    if (!IconComponent) {
        return null;
    }

    return (
        <IconComponent className={cn(sizeMap[size], className)} {...props} />
    );
}
