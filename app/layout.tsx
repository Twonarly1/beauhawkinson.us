import "./global.css"

import localFont from "@next/font/local"
import clsx from "clsx"

import Providers from "./providers"
import { AnalyticsWrapper } from "core"
import { Navigation } from "components"

const kaisei = localFont({
    src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
    weight: "700",
    variable: "--font-kaisei",
    display: "swap",
})

export const metadata = {
    title: {
        default: "Beau Hawkinson",
        template: "%s | Beau Hawkinson",
    },
    description: "Developer, writer, and creator.",
    openGraph: {
        title: "Beau Hawkinson",
        description: "Developer, writer, and creator.",
        url: "https://beauhawkinson.us",
        siteName: "Beau Hawkinson",
        images: [
            {
                url: "https://beauhawkinson.us/two.png",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    // twitter: {
    //     title: "Lee Robinson",
    //     card: "summary_large_image",
    // },
    icons: {
        shortcut: "/favicon.ico",
    },
    // verification: {
    //     google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    //     yandex: "14d2e73487fa6c71",
    // },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={clsx(kaisei.variable)}>
            <body className="mx-auto max-w-4xl bg-[#fefefe] text-black antialiased dark:bg-[#111010] dark:text-white">
                <Providers>
                    <Navigation />
                    <main className="my-32 mx-4 overflow-hidden">
                        {children}
                        <AnalyticsWrapper />
                    </main>
                </Providers>
            </body>
        </html>
    )
}
