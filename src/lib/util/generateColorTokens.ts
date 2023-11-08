type TokenType = "border" | "bg" | "fg";

const generateColorTokens = (tokenType: TokenType) => {
  return {
    DEFAULT: `var(--${tokenType}-default)`,
    accent: `var(--${tokenType}-accent)`,
    muted: `var(--${tokenType}-muted)`,
    subtle: `var(--${tokenType}-subtle)`,
    disabled: `var(--${tokenType}-disabled)`,
  };
};

export default generateColorTokens;
