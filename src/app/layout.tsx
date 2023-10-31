import "./global.css"

import Providers from "./providers"
import { AnalyticsWrapper } from "components/core"
import { Header } from "components/layout"

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
    icons: {
        shortcut: "/favicon.ico",
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="mx-auto max-w-4xl bg-[#fefefe] text-black antialiased dark:bg-[#111010] dark:text-white">
                <Providers>
                    <Header />
                    <main className="my-32 mx-4 overflow-hidden">
                        {children}
                        <AnalyticsWrapper />
                    </main>
                </Providers>
            </body>
        </html>
    )
}
