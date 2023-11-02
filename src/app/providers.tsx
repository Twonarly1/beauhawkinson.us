"use client"

import { ThemeProvider } from "next-themes"

import type { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Providers = ({ children }: Props) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default Providers
