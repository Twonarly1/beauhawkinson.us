import clsx from "clsx"
import { ComponentProps, ForwardedRef, forwardRef } from "react"

import { ButtonContent } from "./button-content"
import type { Props as ButtonContentProps } from "./button-content"

export type ButtonSize = "sm" | "md"

type IntrinsicAnchorProps = ComponentProps<"a">
type IntrinsicButtonProps = ComponentProps<"button">

type CommonProps = {
    variant?: "link" | "showMore"
} & ButtonContentProps

type AnchorProps = {
    as: "a"
    href: IntrinsicAnchorProps["href"]
} & CommonProps

type ButtonProps = {
    as?: "button"
    href?: never
    isDisabled?: boolean
    isLoading?: boolean
    onClick?: IntrinsicButtonProps["onClick"]
    type?: IntrinsicButtonProps["type"]
} & CommonProps

function isAnchor(props: Props): props is AnchorProps {
    return (props as AnchorProps).as === "a"
}

export type Props = AnchorProps | ButtonProps

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(function Button(
    { ...props },
    ref,
) {
    const { children, iconLeft, iconRight, size = "md", variant = "outline" } = props

    if (!("as" in props)) {
        props.as = "button"
    }

    const className = clsx("cursor-pointer transition-colors", {
        "text-sm": size === "sm",
        "py-2 px-6": size === "sm" && variant !== "link",
        "py-3 px-8": size === "md" && variant !== "link",
        "hover:underline": variant === "link",
        "shadow-xs mx-auto flex w-fit rounded border border-gray-300 px-2 py-1 text-gray-800 dark:text-zinc-100":
            variant === "showMore",
    })

    if (isAnchor(props)) {
        const { href } = props
        const isExternalLink = href?.startsWith("http")

        const anchorProps: IntrinsicAnchorProps = {
            className,
            href,
        }

        if (isExternalLink) {
            anchorProps["rel"] = "noopener noreferrer"
            anchorProps["target"] = "_blank"
        }

        return (
            <a {...anchorProps} ref={ref as ForwardedRef<HTMLAnchorElement>}>
                <ButtonContent iconLeft={iconLeft} iconRight={iconRight} size={size}>
                    {children}
                </ButtonContent>
            </a>
        )
    }

    const { isDisabled, isLoading, onClick, type = "button" } = props

    return (
        <button
            className={clsx(className, {
                "opacity-75": isDisabled,
                "animate-pulse": isLoading,
            })}
            disabled={isDisabled || isLoading}
            onClick={onClick}
            ref={ref as ForwardedRef<HTMLButtonElement>}
            type={type}
        >
            <ButtonContent
                iconLeft={iconLeft}
                iconRight={iconRight}
                isLoading={isLoading}
                size={size}
            >
                {children}
            </ButtonContent>
        </button>
    )
})
