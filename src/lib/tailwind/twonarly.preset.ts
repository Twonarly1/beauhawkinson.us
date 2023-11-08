import animate from "tailwindcss-animate";

import twonarlyPlugin from "./twonarlyPlugin";

import type { Config } from "tailwindcss";

const finnegansPreset: Config = {
  darkMode: "class",
  content: [],
  plugins: [animate, twonarlyPlugin],
};

export default finnegansPreset;
