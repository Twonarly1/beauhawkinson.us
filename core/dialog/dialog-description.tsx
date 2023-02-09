"use client"

import { Description as DescriptionPrimitive } from "@radix-ui/react-dialog"

type Props = {
    children: string
}

export function DialogDescription({ children }: Props) {
    return (
        <DescriptionPrimitive asChild>
            <p>{children}</p>
        </DescriptionPrimitive>
    )
}
