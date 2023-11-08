import colors from "./colors";

const semanticTokens = {
  light: {
    "--bg-default": colors.white,
    "--bg-subtle": colors.neutral[300],
    "--bg-muted": colors.neutral[200],
    "--bg-disabled": colors.neutral[100],
    "--bg-accent": colors.primary[500],
    "--fg-default": colors.black,
    "--fg-subtle": colors.neutral[500],
    "--fg-muted": colors.neutral[400],
    "--fg-disabled": colors.neutral[500],
    "--fg-accent": colors.primary[500],
    "--border-default": colors.neutral[200],
    "--border-disabled": colors.neutral[200],
    "--border-subtle": colors.neutral[300],
    "--border-muted": colors.neutral[400],
    "--border-accent": colors.primary[500],
  },
  dark: {
    "--bg-default": colors.black,
    "--bg-subtle": colors.neutral[700],
    "--bg-muted": colors.neutral[600],
    "--bg-disabled": colors.neutral[800],
    "--bg-accent": colors.primary[500],
    "--fg-default": colors.white,
    "--fg-muted": colors.neutral[400],
    "--fg-subtle": colors.neutral[500],
    "--fg-disabled": colors.neutral[600],
    "--fg-accent": colors.primary[500],
    "--border-default": colors.neutral[800],
    "--border-disabled": colors.neutral[800],
    "--border-subtle": colors.neutral[700],
    "--border-muted": colors.neutral[600],
    "--border-accent": colors.primary[500],
  },
};

export default semanticTokens;
