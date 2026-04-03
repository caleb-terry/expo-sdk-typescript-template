import Constants from "expo-constants";
import { z } from "zod";

// EXPO_PUBLIC_ vars are accessed directly from process.env (bundled at build time).
// Non-public secrets come through app.config.ts extra -> expo-constants.
const schema = z.object({
  clerkPublishableKey: z.string().min(1),
  sentryDsn: z.string().url().optional(),
});

export const env = schema.parse({
  clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
  sentryDsn: Constants.expoConfig?.extra?.sentryDsn,
});
