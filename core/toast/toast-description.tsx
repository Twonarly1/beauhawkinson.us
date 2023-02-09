"use client"

import { Description as DescriptionPrimitive } from "@radix-ui/react-toast"

type Props = {
    children: string
}

export function ToastDescription({ children }: Props) {
    return (
        <DescriptionPrimitive asChild>
            <p className="text-black dark:text-white">{children}</p>
        </DescriptionPrimitive>
    )
}
