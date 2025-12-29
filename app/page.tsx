import { HomePageTemplate } from "@/features/visitor-home/components";
import { serverApiClient } from "@/integrations/rest/server-client";

/**
 * Home Page
 *
 * Server-rendered home page using the server API client.
 * Data is fetched at request time (SSR).
 */
export default async function Page() {
    const data = await serverApiClient.visitor.home.getHomePageData();

    return <HomePageTemplate data={data} />;
}
