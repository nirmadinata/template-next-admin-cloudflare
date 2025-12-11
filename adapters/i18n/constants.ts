import { Timezone } from "next-intl";

export const LOCALES = {
    EN: "en",
} as const;

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

export const SUPPORTED_LOCALES = [LOCALES.EN] as const;
export const DEFAULT_LOCALE = LOCALES.EN as Locale;
export const LOCALE_TIMEZONE = {
    [LOCALES.EN]: "Asia/Jakarta",
} satisfies Record<Locale, Timezone>;
