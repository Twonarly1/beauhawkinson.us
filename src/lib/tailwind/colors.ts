import { default as tailwind_colors } from "tailwindcss/colors";

import type { DefaultColors } from "tailwindcss/types/generated/colors";

type colorKey =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";

export interface Colors {
  transparent: string;
  black: string;
  white: string;
  primary: Record<colorKey, string>;
  neutral: DefaultColors["neutral"];
}

const colors: Colors = {
  transparent: "transparent",
  black: "#000000",
  white: "#FFFFFF",
  // Primary palette (built upon Finnegan's primary green).
  primary: {
    50: "#f2fbf3",
    100: "#e0f8e2",
    200: "#c3efc8",
    300: "#94e19e",
    400: "#5eca6c",
    500: "#39b44a",
    600: "#299037",
    700: "#23722f",
    800: "#205b29",
    900: "#1c4b24",
    950: "#0a2910",
  },
  neutral: tailwind_colors.neutral,
};

export default colors;
