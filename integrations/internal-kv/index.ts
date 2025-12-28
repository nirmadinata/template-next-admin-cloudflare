import { getCFContextSync } from "@/integrations/cloudflare-context";

export function getInternalKV() {
    const { env } = getCFContextSync();
    return env.INTERNAL_KV;
}
