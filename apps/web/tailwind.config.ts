import type { Config } from "tailwindcss";
import baseConfig from "@repo/tailwind-config/tailwind.config.js"

export default {
  ...baseConfig,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

} satisfies Config;
