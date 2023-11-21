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
  pink: DefaultColors["pink"];
}

const colors: Colors = {
  transparent: "transparent",
  black: "#000000",
  white: "#FFFFFF",
  primary: {
    50: "#fff2fc",
    100: "#ffe3fa",
    200: "#ffc6f5",
    300: "#ff99e8",
    400: "#ff5dda",
    500: "#ff21d4",
    600: "#ff00dd",
    700: "#cf00af",
    800: "#a9008d",
    900: "#890670",
    950: "#5e004d",
  },
  neutral: tailwind_colors.neutral,
  pink: tailwind_colors.pink,
};

export default colors;
