/**
 * Admin RPC Router
 *
 * All admin/dashboard feature routers are composed here.
 * Each feature exports its own router from the `server` folder.
 *
 * These endpoints are exposed via RPC at /api/admin
 */
export const rpcRouter = {
    // Add admin feature routers here
    // Example: users: usersRouter,
    // Example: settings: settingsRouter,
};

export type RpcRouter = typeof rpcRouter;
