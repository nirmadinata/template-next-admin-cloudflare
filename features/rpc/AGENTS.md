# RPC Feature

This feature provides the internal RPC infrastructure for admin and dashboard endpoints.

## Purpose

- Exposes internal RPC endpoints for admin/dashboard functionality
- Handles authenticated API requests with proper auth middleware
- Provides type-safe RPC clients for both server and client components
- Used for internal operations that require authentication

## Structure

```
rpc/
├── index.ts           # Feature exports
├── base.ts            # Base ORPC instance and auth procedures
├── router.ts          # Main admin RPC router
├── handler.ts         # RPC handler for Next.js routes
├── server-client.ts   # Server-side RPC client
├── client-client.ts   # Client-side RPC client with TanStack Query
└── AGENTS.md          # This file
```

## Usage

### Server Components (Admin)

```typescript
import { serverRpcClient } from "@/features/rpc";

const data = await serverRpcClient.users.list();
```

### Client Components (Admin)

```typescript
import { adminOrpc } from "@/features/rpc";
import { useQuery } from "@tanstack/react-query";

const { data } = useQuery(adminOrpc.users.list.queryOptions());
```

### Adding New Admin Endpoints

1. Create procedures in the admin feature's `server/` folder
2. Use `authProcedure` or `adminProcedure` from this feature
3. Export the router from that feature
4. Register the router in `features/rpc/router.ts`

## API Route

The API route handler is located at `app/api/admin/[[...path]]/route.ts`
and uses the `createRpcHandler` from this feature.

## Authentication

This feature provides authenticated procedures:
- `authProcedure` - Requires any authenticated user
- `adminProcedure` - Requires admin role
