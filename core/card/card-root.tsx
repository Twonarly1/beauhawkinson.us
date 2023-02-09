import { ReactNode } from "react"

import { Stack } from "~/core"

type Props = {
    children: ReactNode
}

export function CardRoot({ children }: Props) {
    return (
        <div className="relative rounded-xl ring-2 ring-pink-200  before:absolute before:inset-0 before:h-full before:w-full">
            <div className="relative z-10 h-full w-full rounded-xl bg-gray-50 px-8 py-8 before:absolute before:inset-0 before:-z-10 before:rounded-xl dark:bg-primary-dark sm:px-12 sm:py-12">
                <Stack alignItems="center" gap={8} justifyContent="center">
                    {children}
                </Stack>
            </div>
        </div>
    )
}
