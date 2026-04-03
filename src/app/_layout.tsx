import { ErrorBoundary } from "@/components/ErrorBoundary";
import { env } from "@/lib/env";
import { queryClient } from "@/lib/query-client";
import { initSentry } from "@/lib/sentry";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "../global.css";

initSentry();

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={env.clerkPublishableKey} tokenCache={tokenCache}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ErrorBoundary>
            <Slot />
          </ErrorBoundary>
        </SafeAreaProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
