import twonarlyPreset from "./src/lib/tailwind/twonarly.preset";

import type { Config } from "tailwindcss";
// import { hawkPreset } from "twonarly-ui";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/content/**/*.mdx",
  ],
  presets: [twonarlyPreset],
};
export default config;
