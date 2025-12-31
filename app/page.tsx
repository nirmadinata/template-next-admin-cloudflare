import { serverVisitorApiClient } from "@/features/visitor-api";
import { HomePageTemplate } from "@/features/visitor-home/components";

/**
 * Home Page
 *
 * Server-rendered home page using the server API client.
 * Data is fetched at request time (SSR).
 */
export default async function Page() {
    const data = await serverVisitorApiClient.home.getHomePageData();

    return <HomePageTemplate data={data} />;
}
