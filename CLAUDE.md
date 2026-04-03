# Project

Expo SDK 55 TypeScript template — production-grade boilerplate for building iOS and Android apps.

## Tech Stack

| Layer           | Package                                     |
| --------------- | ------------------------------------------- |
| Framework       | Expo SDK 55 (managed workflow)              |
| Runtime         | React Native 0.83 + React 19.2              |
| Architecture    | New Architecture only (always on in SDK 55) |
| Language        | TypeScript (strict mode)                    |
| Navigation      | Expo Router v4 (file-based routing)         |
| Styling         | NativeWind v4 + Tailwind CSS v3             |
| Auth            | Clerk (`@clerk/clerk-expo`)                 |
| Server state    | TanStack Query v5                           |
| Client state    | Zustand v5                                  |
| Crash reporting | Sentry (`@sentry/react-native`)             |
| Optimizer       | React Compiler (auto-memoization)           |
| Testing         | Jest + RNTL (unit), Maestro (E2E)           |
| Deployment      | EAS Build + EAS Update                      |

## Commands

| Command                  | Description                              |
| ------------------------ | ---------------------------------------- |
| `pnpm start`             | Start Expo dev server                    |
| `pnpm ios`               | Run on iOS simulator                     |
| `pnpm android`           | Run on Android emulator                  |
| `pnpm lint`              | Run ESLint                               |
| `pnpm typecheck`         | TypeScript type checking                 |
| `pnpm test`              | Run unit tests                           |
| `pnpm test:coverage`     | Run tests with coverage                  |
| `pnpm test:e2e`          | Run Maestro E2E flows                    |
| `pnpm format`            | Format all files with Prettier           |
| `pnpm format:check`      | Check formatting                         |
| `npx expo install [pkg]` | Install SDK-compatible package version   |
| `npx expo-doctor`        | Check dependencies for SDK compatibility |

## Code Conventions

- Conventional commits enforced via commitlint (`feat:`, `fix:`, `chore:`)
- Prettier + ESLint run automatically on pre-commit via lint-staged
- Path alias: `@/*` maps to `./src/*` (e.g., `import { cn } from "@/lib/utils"`)
- NativeWind v4 — use `className` prop on all React Native core components
- No `StyleSheet.create()` except where NativeWind cannot cover the case
- No web target — iOS and Android only
- `EXPO_PUBLIC_*` vars accessed via `process.env`; non-public secrets via `expo-constants`; all validated in `src/lib/env.ts`
- New Architecture always enabled — do NOT add `newArchEnabled` anywhere

## Project Structure

```
src/
  app/              → Expo Router screens and layouts
    (auth)/         → Unauthenticated screens (sign-in, sign-up)
    (app)/          → Authenticated screens (protected by Clerk)
  components/ui/    → Reusable NativeWind UI components
  hooks/            → Custom React hooks (TanStack Query wrappers)
  lib/              → Utility functions, env validation, query client, Sentry init
  store/            → Zustand global state
.maestro/flows/     → Maestro E2E test flows
```

## Deployment

EAS Build: `eas build --platform all --profile preview`
EAS Update (OTA): `eas update --branch production --message "description"`

## Tips

- Always install expo packages with `npx expo install` — it resolves SDK 55-compatible versions automatically
- Run `npx expo-doctor` after adding any package to catch compatibility issues early
- OTA updates use Hermes bytecode diffing (`enableBsdiffPatchSupport: true`) — ~75% smaller download sizes
