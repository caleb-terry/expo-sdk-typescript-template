import { env } from "@/lib/env";
import * as Sentry from "@sentry/react-native";

export function initSentry() {
  if (!env.sentryDsn) return;
  Sentry.init({
    dsn: env.sentryDsn,
    tracesSampleRate: 1.0,
    debug: __DEV__,
  });
}
