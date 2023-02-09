import "styles/globals.css"

import { AnalyticsWrapper, ToastProvider, ToastViewport } from "~/core"
import { Footer, Navigation } from "~/navigation"

import Providers from "./providers"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />

            <body className="mx-auto w-full bg-gray-50 text-zinc-800 scrollbar-hide overflow-x-hidden dark:bg-primary-dark dark:text-zinc-200">
                <ToastProvider>
                    <Providers>
                        <Navigation />

                        {children}

                        <Footer />
                    </Providers>

                    <ToastViewport />
                </ToastProvider>

                <AnalyticsWrapper />
            </body>
        </html>
    )
}
