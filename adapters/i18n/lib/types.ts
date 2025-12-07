import { formats } from "@/adapters/i18n/lib/request";
import { routing } from "@/adapters/i18n/lib/routing";
import messages from "@/public/locales/en.json";

declare module "next-intl" {
    interface AppConfig {
        Locale: (typeof routing.locales)[number];
        Messages: typeof messages;
        Formats: typeof formats;
    }
}
