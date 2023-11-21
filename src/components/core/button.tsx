import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { forwardRef } from "react";

import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Size = "sm" | "md" | "lg" | "xl";
type Variant = "default" | "solid" | "outline" | "gradient";

export interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

/**
 * Core Button component.
 */
const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      loading,
      size = "md",
      variant = "default",
      disabled = false,
      onClick,
      className,
    },
    ref
  ) => {
    const button = tv({
      base: "flex font-medium items-center rounded-md transition-colors duration-300",
      variants: {
        variant: {
          default: "text-zinc-500 hover:text-black dark:hover:text-white",
          solid:
            "gap-2 bg-primary hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200 disabled:text-primary-700 text-white",
          outline:
            "border border-primary-700 text-primary-700 hover:bg-primary-50 active:bg-primary-100 dark:hover:bg-primary-950/50",
          gradient:
            "bg-gradient-to-br from-primary-400 to-primary-600 text-white hover:from-primary-500 hover:to-primary-700 active:from-primary-600 active:to-primary-800 disabled:from-primary-100 disabled:to-primary-300 disabled:text-primary-700",
        },
        size: {
          sm: "px-2 py-1 text-xs",
          md: "px-3 py-2 text-sm",
          lg: "px-5 py-3 text-base",
          xl: "px-5 py-3 text-lg",
        },
        disabled: {
          true: "cursor-not-allowed opacity-50",
        },
        loading: {
          true: "cursor-wait opacity-50",
        },
      },
      // compoundVariants: [
      //   {
      //     size: ["sm", "md"],
      //     class: "px-3 py-1",
      //   },
      // ],
      defaultVariants: {
        size: "md",
        variant: "default",
      },
    });

    return (
      <button
        className={twMerge(
          button({
            size: size,
            variant: variant,
            disabled: disabled,
            loading: loading,
          }),
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

export default Button;

// const baseClasses =
//   "flex font-medium items-center rounded-md transition-colors duration-300";

// const sizeClasses: Record<Size, string> = {
//   sm: "px-2 py-1 text-xs",
//   md: "px-3 py-2 text-sm",
//   lg: "px-5 py-3 text-base",
//   xl: "px-5 py-3 text-lg",
// };
// const variantClasses: Record<Variant, string> = {
//   default:
//     "gap-2 bg-primary hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200 disabled:text-primary-700 text-white",
//   outline:
//     "border border-primary-700 text-primary-700 hover:bg-primary-50 active:bg-primary-100",
//   dropdown:
//     "w-full gap-2 text-zinc-500 hover:text-black dark:hover:text-white text-left hover:bg-gray-100 dark:hover:bg-zinc-800",
//   header: "text-zinc-500 hover:text-black dark:hover:text-white",
//   gradient:
//     "bg-gradient-to-br from-primary-400 to-primary-600 text-white hover:from-primary-500 hover:to-primary-700 active:from-primary-600 active:to-primary-800 disabled:from-primary-100 disabled:to-primary-300 disabled:text-primary-700",
// };
