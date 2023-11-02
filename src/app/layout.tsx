import "./global.css"

import Providers from "./providers"
import { AnalyticsWrapper } from "components/core"
import { Header } from "components/layout"
import app from "lib/config/app"

import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
    title: app.name,
    description: app.description,
    applicationName: app.shortName,
    openGraph: {
        title: app.name,
        description: app.description,
        url: app.domain,
        siteName: app.name,
        locale: "en-US",
        type: "website",
    },
}

type Props = {
    children: ReactNode
}

const RootLayout = ({ children }: Props) => {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no,viewport-fit=cover"
                />
            </head>
            <body className="bg-[#fefefe] px-4 dark:bg-[#111010]">
                <Providers>
                    <main className="mx-auto w-full max-w-5xl">
                        <Header />
                        {children}
                        <AnalyticsWrapper />
                    </main>
                </Providers>
            </body>
        </html>
    )
}

export default RootLayout
