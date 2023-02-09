import classNames from "classnames"

import { ResponsiveProp, toResponsiveObject } from "core/responsive-utils"

import { Root, RootProps } from "./root"

type Props = {
    direction?: ResponsiveProp<"horizontal" | "vertical">
    height?: "screen"
    wrap?: boolean
} & Omit<RootProps, "className">

export function Stack({
    children,
    direction: directionProp = { base: "vertical" },
    height,
    wrap,
    ...props
}: Props) {
    const direction = toResponsiveObject(directionProp)

    return (
        <Root
            className={classNames("flex", {
                "flex-col": direction.base === "vertical",
                "sm:flex-col": direction.sm === "vertical",
                "md:flex-col": direction.md === "vertical",
                "lg:flex-col": direction.lg === "vertical",
                "flex-row": direction.base === "horizontal",
                "sm:flex-row": direction.sm === "horizontal",
                "md:flex-row": direction.md === "horizontal",
                "lg:flex-row": direction.lg === "horizontal",
                "flex-wrap": wrap === true,
                "h-screen": height === "screen",
            })}
            {...props}
        >
            {children}
        </Root>
    )
}
