import twonarlyPreset from "./src/lib/tailwind/twonarly.preset";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  presets: [twonarlyPreset],
};
export default config;
