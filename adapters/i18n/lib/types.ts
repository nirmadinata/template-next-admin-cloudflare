import { formats } from "@/adapters/i18n/lib/request";
import messages from "@/public/locales/en.json";

declare module "next-intl" {
    interface AppConfig {
        Messages: typeof messages;
        Formats: typeof formats;
    }
}
