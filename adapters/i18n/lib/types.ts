import { Locale } from "@/adapters/i18n/constants";
import { formats } from "@/adapters/i18n/lib/request";
import messages from "@/public/locales/en.json";

declare module "next-intl" {
    interface AppConfig {
        Locale: Locale;
        Messages: typeof messages;
        Formats: typeof formats;
    }
}
