# Time Manager App

## Project Structure

```
time_manager_app/
├── apps/                      # All applications
│   ├── web/                  # Next.js web application
│   ├── mobile/               # React Native mobile app
│   └── admin/                # Admin dashboard (future)
├── packages/                  # Shared packages
│   ├── api/                  # API routes and controllers
│   ├── database/             # Database schema and migrations
│   ├── ui/                   # Shared UI components
│   ├── types/                # Shared TypeScript types
│   └── utils/                # Shared utilities
├── public/                   # Shared public assets
├── docker-compose.yml        # Docker services
└── package.json             # Root package configuration
```

## Why This Structure?

1. **Shared Code**:

   - `packages/api`: API routes used by all apps
   - `packages/database`: Database schema and migrations
   - `packages/ui`: Reusable UI components
   - `packages/types`: Shared TypeScript types
   - `packages/utils`: Common utilities

2. **Single Source of Truth**:

   - One database schema
   - Shared API endpoints
   - Common types and interfaces
   - Unified UI components

3. **Easier Maintenance**:

   - Changes to shared code affect all apps
   - Consistent API responses
   - Type safety across all applications
   - DRY (Don't Repeat Yourself) principle

4. **Better Development Experience**:
   - Local development of shared packages
   - Hot reloading across all apps
   - Consistent coding standards
   - Shared testing utilities
