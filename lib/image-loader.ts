import type { ImageLoader } from "next/image";

const cloudflareLoader: ImageLoader = ({ src, width, quality }) => {
    const params = new URLSearchParams({
        width: width.toString(),
    });

    if (quality) {
        params.set("quality", quality.toString());
    }

    const stringifiedParams = params.toString();
    if (process.env.NODE_ENV === "development") {
        return `${src}?${stringifiedParams}`;
    }

    const parameterizedParams = stringifiedParams.replaceAll("&", ",");
    const newSrc = src.startsWith("/") ? src.slice(1) : src;

    return `/cdn-cgi/image/${parameterizedParams}/${newSrc}`;
};

export default cloudflareLoader;
