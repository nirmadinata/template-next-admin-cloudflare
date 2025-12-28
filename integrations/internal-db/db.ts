import "server-only";

import { drizzle } from "drizzle-orm/d1";

import * as schema from "./schema";
import { getCFContextSync } from "@/integrations/cloudflare-context";

export function getD1DB() {
    const { env } = getCFContextSync();
    return drizzle(env.INTERNAL_DB, {
        schema,
        casing: "snake_case",
    });
}
