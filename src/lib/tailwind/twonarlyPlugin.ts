// import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

import { colors, semanticTokens } from ".";
import { generateColorTokens } from "../util";

const twonarlyPlugin = plugin(
  ({ addBase }) => {
    addBase({
      ":root": semanticTokens.light,
      ".dark": semanticTokens.dark,
    });
  },
  {
    theme: {
      extend: {
        borderColor: generateColorTokens("border"),
        backgroundColor: generateColorTokens("bg"),
        textColor: generateColorTokens("fg"),
        colors: {
          primary: { ...colors.primary, DEFAULT: colors.primary[500] },
        },
        gridTemplateRows: {
          layout: "auto 1fr auto",
        },
        boxShadow: {
          neon: "0 0 5px theme('colors.pink.200'), 0 0 20px theme(`colors.pink.700`)",
        },
        zIndex: {
          backdrop: "50",
          dialog: "100",
          menu: "110",
          header: "40",
        },
        keyframes: {
          dash: {
            from: { "stroke-dashoffset": "2000" },
            to: { "stroke-dashoffset": "0" },
          },

          blink: {
            "0%, 100%": { visibility: "visible" },
            "50%": { visibility: "hidden" },
          },
          move: {
            to: {
              strokeDashoffset: "1000",
            },
          },
        },
        animation: {
          dash: "dash 10s linear forwards infinite",
          blink: "1s steps(2) infinite",
        },
        // fontFamily: {
        //   sans: ["var(--font-sans)", ...fontFamily.],
        // },
      },
    },
  }
);

export default twonarlyPlugin;
