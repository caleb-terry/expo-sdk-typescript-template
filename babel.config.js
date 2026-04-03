module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          // jsxImportSource MUST be in the preset options, not as a standalone plugin
          jsxImportSource: "nativewind",
          // React Compiler: auto-memoizes components at build time
          "react-compiler": {},
        },
      ],
      "nativewind/babel",
    ],
    plugins: [
      ["module-resolver", { root: ["."], alias: { "@": "./src" } }],
      // DO NOT add react-native-reanimated/plugin here.
      // babel-preset-expo auto-configures it in SDK 55; adding it again causes
      // a "Duplicate plugin/preset detected" error with Reanimated v4.
    ],
  };
};
