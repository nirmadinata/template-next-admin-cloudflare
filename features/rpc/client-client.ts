"use client";

import type { RpcRouter } from "./router";

import { createORPCClient, onError } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";

/**
 * RPC Link for client-side requests
 *
 * Uses fetch-based HTTP calls to the admin RPC endpoints.
 */
const link = new RPCLink<RpcRouter>({
    url: () => {
        if (typeof window === "undefined") {
            throw new Error(
                "Client RPC client is not allowed on the server side."
            );
        }
        return `${window.location.origin}/api/admin`;
    },
    interceptors: [
        onError((error) => {
            console.error("[Admin RPC Client Error]", error);
        }),
    ],
});

/**
 * Client-side RPC client for Admin/Dashboard
 *
 * Use this client for client components with fetch-based HTTP calls.
 *
 * @example
 * ```ts
 * import { clientRpcClient } from "@/features/rpc";
 *
 * const users = await clientRpcClient.users.list();
 * ```
 */
export const clientRpcClient = createORPCClient<RpcRouter>(link);

/**
 * TanStack Query utilities for Admin RPC
 *
 * Use this for React Query integration with type-safe queries and mutations.
 *
 * @example
 * ```tsx
 * import { adminOrpc } from "@/features/rpc";
 * import { useQuery } from "@tanstack/react-query";
 *
 * const { data } = useQuery(adminOrpc.users.list.queryOptions());
 * ```
 */
export const adminOrpc = createTanstackQueryUtils(clientRpcClient);
