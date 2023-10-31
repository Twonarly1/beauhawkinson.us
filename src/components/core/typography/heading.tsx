import clsx from "clsx"
import { ReactNode, forwardRef } from "react"

type HeadingElement = "h1" | "h2" | "h3"

type Props = {
    as: HeadingElement
    children: ReactNode
    id?: string
}

export const Heading = forwardRef<HTMLHeadingElement, Props>(function Heading(
    { as, children, ...props },
    ref,
) {
    const Element = as

    return (
        <Element
            className={clsx({
                "text-md mt-1 cursor-default xs:text-xl sm:text-center": as === "h3",
                "cursor-default text-4xl font-bold text-gray-900 dark:text-gray-100": as === "h2",
                "cursor-default text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl":
                    as === "h1",
            })}
            ref={ref}
            {...props}
        >
            {children}
        </Element>
    )
})
