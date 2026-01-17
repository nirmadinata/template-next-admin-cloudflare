/**
 * Client-side RPC exports
 *
 * Use this for client components with fetch-based HTTP calls.
 *
 * @example
 * ```tsx
 * import { orpc } from "@/integrations/rpc/client";
 * import { useQuery } from "@tanstack/react-query";
 *
 * const { data } = useQuery(orpc.home.getHomePageData.queryOptions());
 * ```
 */

export { clientRpc, orpc } from "./client-client";
