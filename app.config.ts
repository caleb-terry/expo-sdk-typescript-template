import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "ExpoTemplate",
  slug: "expo-template",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: false,
    bundleIdentifier: "com.example.expotemplate",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundColor: "#ffffff",
    },
    package: "com.example.expotemplate",
  },
  plugins: [
    ["expo-router", { root: "./src/app" }],
    "expo-secure-store",
    [
      "@sentry/react-native/expo",
      {
        organization: process.env.SENTRY_ORG ?? "",
        project: process.env.SENTRY_PROJECT ?? "",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    // React Compiler: auto-memoizes components at build time (production-recommended in SDK 55)
    reactCompiler: true,
  },
  // NOTE: Do NOT add newArchEnabled here. It was removed in SDK 55.
  // The New Architecture is always on and cannot be disabled.
  extra: {
    // Only non-EXPO_PUBLIC_ secrets go here (accessed via expo-constants)
    sentryDsn: process.env.SENTRY_DSN,
    eas: { projectId: process.env.EAS_PROJECT_ID },
  },
  updates: {
    url: "https://u.expo.dev/YOUR_EAS_PROJECT_ID",
    // ~75% reduction in OTA update download sizes (opt-in in SDK 55, default in SDK 56)
    enableBsdiffPatchSupport: true,
  },
  runtimeVersion: { policy: "appVersion" },
});
