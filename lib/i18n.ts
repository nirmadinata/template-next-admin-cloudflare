import { createNavigation } from "next-intl/navigation";

import { routing } from "@/adapters/i18n/lib/routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
