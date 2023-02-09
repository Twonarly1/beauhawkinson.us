"use client"

import { Title as TitlePrimitive } from "@radix-ui/react-toast"

type Props = {
    children: string
}

export function ToastTitle({ children }: Props) {
    return (
        <TitlePrimitive asChild>
            <p className="font-bold text-black dark:text-white">{children}</p>
        </TitlePrimitive>
    )
}
