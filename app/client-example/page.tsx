import { ClientHomeContent } from "@/features/visitor-home/components/templates";

/**
 * Client-Side Rendering Example Page
 *
 * This page demonstrates client-side data fetching with TanStack Query.
 * The data is fetched on the client using the ORPC client and React Query hooks.
 *
 * Compare with the main page (/) which uses SSR with serverApiClient.
 *
 * Benefits of CSR approach:
 * - Faster initial page load (no server-side data fetching)
 * - Built-in caching with React Query
 * - Automatic refetching on focus/reconnect
 * - Better for dynamic, frequently updating data
 *
 * Benefits of SSR approach (main page):
 * - Better SEO (data in HTML)
 * - No loading states for initial content
 * - Better for static or rarely changing content
 */
export default function ClientExamplePage() {
    return <ClientHomeContent />;
}
