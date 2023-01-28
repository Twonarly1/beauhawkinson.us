import "../styles/globals.css"
import Providers from "./providers"
import { Footer, Header } from "components"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <Providers>
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </Providers>
        </html>
    )
}
