import { quote } from "shell-quote";
import { ESLint } from "eslint";

const eslint = new ESLint();

const escape = (str) => {
  const escaped = quote(str);
  return escaped.replace(/\\@/g, "@");
};

const config = {
  "*.{ts,tsx}": (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => escape([filename]))
      .join(" ");
    return [
      `prettier --write ${escapedFileNames}`,
      `eslint ${filenames
        .filter((file) => !eslint.isPathIgnored(file))
        .map((f) => `"${f}"`)
        .join(" ")}`,
    ];
  },
};

export default config;
