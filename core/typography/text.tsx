import clsx from "clsx"
import { ForwardedRef, ReactNode, forwardRef } from "react"

type Props = {
    as?: "p" | "span"
    children: ReactNode
    color?: 0 | 50 | 100 | 200 | 300 | 400 | 500 | 1000
    id?: string
    serif?: boolean
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl"
    tracking?: "tighter" | "tight" | "normal"
    weight?: "normal" | "semibold" | "bold"
}

export const Text = forwardRef<HTMLParagraphElement | HTMLSpanElement, Props>(function Text(
    {
        as = "span",
        children,
        color = 200,
        weight = "normal",
        serif = false,
        size = "base",
        tracking = "normal",
        ...props
    },
    ref,
) {
    const className = clsx({
        "font-normal": weight === "normal",
        "font-semibold": weight === "semibold",
        "font-bold": weight === "bold",
        "font-serif": serif,
        "text-xs": size === "xs",
        "text-sm sm:text-lg ": size === "sm",
        "text-base": size === "base",
        "text-lg sm:text-xl lg:text-2xl": size === "lg",
        "text-xl sm:text-2xl": size === "xl",
        "text-2xl sm:text-3xl tracking-tight": size === "2xl",
        "text-3xl sm:text-4xl tracking-tight": size === "3xl",
        "text-white dark:text-black": color === 0,
        "text-pink-400 dark:text-pink-200": color === 400,
        "text-slate-500 dark:text-zinc-200": color === 500,
        "text-neutral-800 dark:text-neutral-200 p-5 border border-neutral-100 dark:border-neutral-800 rounded-lg bg-neutral-100 dark:bg-neutral-900":
            color === 1000,
        "tracking-tighter": tracking === "tighter",
        "tracking-tight": tracking === "tight",
        "tracking-normal": tracking === "normal",
    })

    if (as === "p") {
        return (
            <p className={className} ref={ref as ForwardedRef<HTMLParagraphElement>} {...props}>
                {children}
            </p>
        )
    }

    return (
        <span className={className} ref={ref as ForwardedRef<HTMLSpanElement>} {...props}>
            {children}
        </span>
    )
})
