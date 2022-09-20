import "../styles/globals.css"
import { AppProps } from "../../node_modules/next/app"
import { ThemeProvider } from "next-themes"
import { Toaster } from "react-hot-toast"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
                <Toaster position="top-right" reverseOrder={false} />
            </ThemeProvider>
        </>
    )
}
