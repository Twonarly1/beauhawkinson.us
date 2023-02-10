import classNames from "classnames"
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
            className={classNames({
                "text-md mt-1 cursor-default xs:text-xl": as === "h3",
                "cursor-default text-4xl font-bold text-gray-900 dark:text-gray-100": as === "h2",
                "cursor-default text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl":
                    as === "h1",
            })}
            ref={ref}
            {...props}
        >
            {children}
        </Element>
    )
})
