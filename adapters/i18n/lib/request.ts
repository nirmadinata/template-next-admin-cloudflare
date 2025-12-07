import { cookies } from "next/headers";

import { Locale } from "next-intl";
import { Formats } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import {
    DEFAULT_LOCALE,
    SUPPORTED_LOCALES,
} from "@/adapters/i18n/lib/constants";
import { COOKIE_NAMES } from "@/configs/constants";

export const formats = {
    dateTime: {
        short: {
            day: "numeric",
            month: "short",
            year: "numeric",
        },
    },
    number: {
        precise: {
            maximumFractionDigits: 5,
        },
    },
    list: {
        enumeration: {
            style: "long",
            type: "conjunction",
        },
    },
} satisfies Formats;

export default getRequestConfig(async () => {
    const store = await cookies();
    const locale = store.get(COOKIE_NAMES.LOCALE)?.value;

    /**
     * if no locale is set in cookies, return the default locale
     */
    if (!locale) {
        return {
            locale: DEFAULT_LOCALE,
            messages: (await import(`@/public/locales/${DEFAULT_LOCALE}.json`))
                .default,
        };
    }

    /**
     * if the locale from cookies is not supported, return the default locale
     */
    if (!SUPPORTED_LOCALES.some((l) => l === locale)) {
        return {
            locale: DEFAULT_LOCALE,
            messages: (await import(`@/public/locales/${DEFAULT_LOCALE}.json`))
                .default,
        };
    }

    const l = locale as Locale;

    return {
        locale: l,
        messages: (await import(`@/public/locales/${l}.json`)).default,
    };
});
