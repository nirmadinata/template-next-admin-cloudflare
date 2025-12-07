import { defineRouting } from "next-intl/routing";

import {
    DEFAULT_LOCALE,
    SUPPORTED_LOCALES,
} from "@/adapters/i18n/lib/constants";

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: SUPPORTED_LOCALES,

    // Used when no locale matches
    defaultLocale: DEFAULT_LOCALE,
});
