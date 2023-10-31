import { clsx } from "clsx"
import { forwardRef } from "react"

import type { ReactNode } from "react"

type Size = "sm" | "md" | "lg" | "xl"
type Variant = "primary" | "outline" | "dropdown" | "header"

type ButtonProps = {
    variant?: Variant
    size?: Size
    children: ReactNode
    isLoading?: boolean
    onClick?: () => void
    href?: never
    isDisabled?: boolean
    type?: "button" | "submit" | "reset"
}

/**
 * Core Button component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            isLoading,
            onClick,
            size = "md",
            variant = "outline",
            isDisabled,
            type = "button",
        },
        ref,
    ) => {
        const baseClasses = "transition-colors duration-300"

        const sizeClasses: Record<Size, string> = {
            sm: "px-2 py-1 text-xs",
            md: "px-3 py-2 text-sm",
            lg: "px-5 py-3 text-base",
            xl: "px-5 py-3 text-lg",
        }
        const variantClasses: Record<Variant, string> = {
            primary:
                "flex items-center gap-2 rounded-md bg-primary border border-primary hover:bg-primary/80 text-white",
            outline:
                "flex items-center gap-2 rounded-md border font-medium hover:bg-gray-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800",
            dropdown:
                "flex rounded w-full items-center font-medium gap-2 text-zinc-500 hover:text-black dark:hover:text-white text-left hover:bg-gray-100 dark:hover:bg-zinc-800",
            header: "flex items-center font-medium text-zinc-500 hover:text-black dark:hover:text-white",
        }

        const className = clsx(baseClasses, sizeClasses[size], variantClasses[variant], {
            "cursor-not-allowed opacity-75": isDisabled,
            "cursor-pointer": !isDisabled,
            "animate-pulse": isLoading,
        })

        return (
            <button
                className={className}
                disabled={isDisabled || isLoading}
                onClick={onClick}
                ref={ref}
                type={type}
                aria-disabled={isDisabled}
            >
                {children}
            </button>
        )
    },
)

export default Button
