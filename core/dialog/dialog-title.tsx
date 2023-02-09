"use client"

import { Title as TitlePrimitive } from "@radix-ui/react-dialog"

import { Heading } from "~/core"

type Props = {
    children: string
}

export function DialogTitle({ children }: Props) {
    return (
        <TitlePrimitive asChild>
            <Heading as="h1">{children}</Heading>
        </TitlePrimitive>
    )
}
