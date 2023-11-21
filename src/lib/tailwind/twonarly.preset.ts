import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

import twonarlyPlugin from "./twonarlyPlugin";

import type { Config } from "tailwindcss";

const finnegansPreset: Config = {
  darkMode: "class",
  content: [],
  plugins: [animate, typography, twonarlyPlugin],
};

export default finnegansPreset;
