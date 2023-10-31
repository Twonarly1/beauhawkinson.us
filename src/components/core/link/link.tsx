"use client"
import { clsx } from "clsx"
import { default as NextLink } from "next/link"

import type { LinkProps } from "next/link"
import type { ReactNode } from "react"

type Size = "sm" | "md" | "lg" | "xl"
type Variant =
    | "primary"
    | "outline"
    | "header"
    | "isActive"
    | "dropdown"
    | "isDropdownActive"
    | "hover"

interface Props extends LinkProps<"link"> {
    children: ReactNode
    isExternal?: boolean
    isDisabled?: boolean
    variant?: Variant
    size?: Size
}

/**
 * Core Link component.
 */
const Link = ({ children, isExternal, isDisabled, variant, size = "md", ...rest }: Props) => {
    const baseClasses = "transition-colors duration-300"

    const sizeClasses: Record<Size, string> = {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-2 text-sm",
        lg: "px-5 py-3 text-base",
        xl: "px-5 py-3 text-lg",
    }

    const variantClasses: Record<Variant, string> = {
        primary: "flex items-center gap-2 rounded-md bg-primary hover:bg-primary/80 text-white",
        outline:
            "flex items-center gap-2 rounded-md border bg-white font-medium shadow-sm hover:bg-gray-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800",
        dropdown:
            "flex w-full rounded items-center font-medium gap-2 text-zinc-500 hover:text-black dark:hover:text-white text-left hover:bg-gray-100 dark:hover:bg-zinc-800",
        header: "flex items-center font-medium text-zinc-500 hover:text-black dark:hover:text-white",
        isDropdownActive:
            "flex rounded w-full items-center gap-2 font-medium text-left hover:bg-gray-100 dark:bg-zinc-800 bg-gray-100 dark:hover:bg-zinc-800",
        isActive: "flex items-center text-black font-medium dark:text-white",
        hover: "hover:text-primary",
    }

    const className = clsx(baseClasses, sizeClasses[size], variant && variantClasses[variant], {
        "cursor-not-allowed opacity-75": isDisabled,
        "cursor-pointer": !isDisabled,
    })

    return (
        <NextLink
            className={className}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-disabled={isDisabled}
            {...rest}
        >
            {children}
        </NextLink>
    )
}

export default Link
