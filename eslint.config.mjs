import expo from "eslint-config-expo/flat.js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...expo,
  {
    ignores: ["node_modules/**", ".expo/**", "dist/**", "android/**", "ios/**", "coverage/**"],
  },
]);
