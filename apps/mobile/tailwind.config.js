const baseConfig = require("@repo/tailwind-config/tailwind.config.js");

module.exports = {
  ...baseConfig,
  presets: [
    require("nativewind/preset"),
    ...(baseConfig.presets || []),
  ],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
};
