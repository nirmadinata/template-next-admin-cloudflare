"use client";

import type { AppRouter } from "./router";
import type { ContractRouterClient } from "@orpc/contract";
import type { JsonifiedClient } from "@orpc/openapi-client";

import { createORPCClient, onError } from "@orpc/client";
import { OpenAPILink } from "@orpc/openapi-client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";

/**
 * OpenAPI Link for client-side requests
 *
 * Uses fetch-based HTTP calls to the API endpoints.
 */
const link = new OpenAPILink<object>(
    {} as AppRouter, // Contract for type inference
    {
        url: () => {
            if (typeof window === "undefined") {
                throw new Error(
                    "Client API client is not allowed on the server side."
                );
            }
            return `${window.location.origin}/api`;
        },
        interceptors: [
            onError((error) => {
                console.error("[Client API Error]", error);
            }),
        ],
    }
);

/**
 * Client-side API client
 *
 * Use this client for client components with fetch-based HTTP calls.
 *
 * @example
 * ```ts
 * import { clientApiClient } from "@/integrations/rest";
 *
 * const data = await clientApiClient.visitor.home.getHeroSection();
 * ```
 */
export const clientApiClient: JsonifiedClient<ContractRouterClient<AppRouter>> =
    createORPCClient(link);

/**
 * TanStack Query utilities for ORPC
 *
 * Use this for React Query integration with type-safe queries and mutations.
 *
 * @example
 * ```tsx
 * import { orpc } from "@/integrations/rest";
 * import { useQuery } from "@tanstack/react-query";
 *
 * const { data } = useQuery(orpc.visitor.home.getHeroSection.queryOptions());
 * ```
 */
export const orpc = createTanstackQueryUtils(clientApiClient);
