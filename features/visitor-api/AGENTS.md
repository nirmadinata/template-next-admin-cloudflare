# Visitor API Feature

This feature provides the public-facing OpenAPI infrastructure for visitor endpoints.

## Purpose

- Exposes public REST API endpoints via ORPC with OpenAPI support
- Handles visitor-related API requests without authentication
- Provides type-safe API clients for both server and client components

## Structure

```
visitor-api/
├── index.ts           # Feature exports
├── base.ts            # Base ORPC instance and public procedure
├── router.ts          # Main visitor API router
├── handler.ts         # OpenAPI handler for Next.js routes
├── server-client.ts   # Server-side API client
├── client-client.ts   # Client-side API client with TanStack Query
└── AGENTS.md          # This file
```

## Usage

### Server Components

```typescript
import { serverApiClient } from "@/features/visitor-api";

const data = await serverApiClient.home.getHeroSection();
```

### Client Components

```typescript
import { orpc } from "@/features/visitor-api";
import { useQuery } from "@tanstack/react-query";

const { data } = useQuery(orpc.home.getHeroSection.queryOptions());
```

### Adding New Endpoints

1. Create procedures in the relevant feature's `server/` folder
2. Export the router from that feature
3. Register the router in `features/visitor-api/router.ts`

## API Route

The API route handler is located at `app/api/visitor/[[...path]]/route.ts`
and uses the `createApiHandler` from this feature.
