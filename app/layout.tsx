import "styles/globals.css"
import { Footer, Header } from "~/core"

import Providers from "./providers"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head />

            <body className="mx-auto w-full bg-gray-50 text-zinc-800 scrollbar-hide dark:bg-primary-dark dark:text-zinc-200">
                <Providers>
                    <Header />

                    {children}

                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
