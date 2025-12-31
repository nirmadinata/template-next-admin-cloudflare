"use client";

import type { ContractRouterClient } from "@orpc/contract";
import type { JsonifiedClient } from "@orpc/openapi-client";

import { createORPCClient, onError } from "@orpc/client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";

import { visitorApiRouter, type VisitorApiRouter } from "./router";

/**
 * OpenAPI Link for client-side requests
 *
 * Uses fetch-based HTTP calls to the API endpoints.
 */
const link = new OpenAPILink(
    visitorApiRouter, // Contract for type inference
    {
        url: () => {
            if (typeof window === "undefined") {
                throw new Error(
                    "Client API client is not allowed on the server side."
                );
            }
            return `${window.location.origin}/api/visitor`;
        },
        interceptors: [
            onError((error) => {
                console.error("[Visitor API Client Error]", error);
            }),
        ],
    }
);

/**
 * Client-side Visitor API client
 *
 * Use this client for client components with fetch-based HTTP calls.
 *
 * @example
 * ```ts
 * import { clientVisitorApiClient } from "@/features/visitor-api";
 *
 * const data = await clientVisitorApiClient.home.getHeroSection();
 * ```
 */
export const clientVisitorApiClient: JsonifiedClient<
    ContractRouterClient<VisitorApiRouter>
> = createORPCClient(link);

/**
 * TanStack Query utilities for Visitor API
 *
 * Use this for React Query integration with type-safe queries and mutations.
 *
 * @example
 * ```tsx
 * import { visitorOrpc } from "@/features/visitor-api";
 * import { useQuery } from "@tanstack/react-query";
 *
 * const { data } = useQuery(visitorOrpc.home.getHeroSection.queryOptions());
 * ```
 */
export const visitorOrpc = createTanstackQueryUtils(clientVisitorApiClient);
