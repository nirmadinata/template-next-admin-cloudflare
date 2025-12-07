import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        formats: ["image/webp"],
        remotePatterns: [],
    },
};

const withNextIntl = createNextIntlPlugin(
    // Specify a custom path here
    {
        requestConfig: "./adapters/i18n/lib/request.ts",
    }
);

export default withNextIntl(nextConfig);
