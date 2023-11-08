import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Size = "sm" | "md" | "lg" | "xl";
type Variant = "primary" | "outline" | "dropdown" | "header";

export interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
}

/**
 * Core Button component.
 */
const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      isLoading,
      size = "md",
      variant = "outline",
      isDisabled = false,
      onClick,
      className,
    },
    ref
  ) => {
    const baseClasses =
      "flex font-medium items-center rounded-md transition-colors duration-300";

    const sizeClasses: Record<Size, string> = {
      sm: "px-2 py-1 text-xs",
      md: "px-3 py-2 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-5 py-3 text-lg",
    };
    const variantClasses: Record<Variant, string> = {
      primary:
        "gap-2 bg-primary border border-primary hover:bg-primary/80 text-white",
      outline: "gap-2",
      dropdown:
        "w-full gap-2 text-zinc-500 hover:text-black dark:hover:text-white text-left hover:bg-gray-100 dark:hover:bg-zinc-800",
      header: "text-zinc-500 hover:text-black dark:hover:text-white",
    };

    return (
      <button
        className={twMerge(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          isDisabled ? "cursor-not-allowed opacity-75" : "cursor-pointer",
          isLoading && "animate-pulse",
          className
        )}
        disabled={isDisabled || isLoading}
        ref={ref}
        onClick={onClick}
        aria-disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
);

export default Button;
