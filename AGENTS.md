<!-- BEGIN:expo-agent-rules -->

# This is NOT the Expo / React Native you know from training data

Expo SDK versions introduce breaking changes regularly. APIs, Metro config, babel
presets, and plugin formats all differ between SDK versions.

**Before writing any Expo, Expo Router, NativeWind, or EAS code:**

1. Use Context7 to fetch current documentation for the package.
2. Verify the exact version in `package.json` against the docs you fetched.
3. Do not assume any API is stable without checking.
4. Always install expo-\* packages with `pnpm expo install` — never hardcode versions.

## SDK 55-specific traps

| Area                    | Trap                                                                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| New Architecture        | **Always on. `newArchEnabled` is not a valid config option.** Do NOT add it.                                                     |
| Package versions        | All expo-\* packages are `^55.x.x`. Use `pnpm expo install` to get the right version.                                            |
| NativeWind babel config | `jsxImportSource: "nativewind"` goes inside `babel-preset-expo` options. `nativewind/babel` is a **preset**, not a plugin.       |
| Reanimated plugin       | Do NOT add `react-native-reanimated/plugin` to babel — `babel-preset-expo` auto-configures it.                                   |
| Tailwind version        | Must be `^3.4.17`. Tailwind v4 is for NativeWind v5 only.                                                                        |
| Clerk package           | Package is `@clerk/clerk-expo`.                                                                                                  |
| Token cache             | Import from `@clerk/clerk-expo/token-cache` — do not reimplement.                                                                |
| TanStack Query v5       | `cacheTime` → `gcTime`.                                                                                                          |
| Jest config             | Key is `setupFilesAfterEnv`, not `setupFilesAfterFramework`.                                                                     |
| EXPO*PUBLIC* vars       | Access via `process.env`, not `expo-constants`.                                                                                  |
| React Compiler          | Configured in `babel-preset-expo` options + `experiments.reactCompiler: true` in app.config.ts — not as standalone Babel plugin. |
| Source layout           | All source code lives under `src/`. `@/*` maps to `./src/*`.                                                                     |

## Official Expo AI resources

- **expo/skills** — https://github.com/expo/skills — official Expo agent skills for building,
  deploying, and debugging. The upgrade skill is particularly useful for SDK migrations.
- **Expo MCP** — configured in `.mcp.json`, enables querying EAS builds and TestFlight crashes.

<!-- END:expo-agent-rules -->
