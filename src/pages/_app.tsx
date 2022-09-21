import "../styles/globals.css"
import { AppProps } from "../../node_modules/next/app"
import { ThemeProvider } from "next-themes"
import { Toaster } from "react-hot-toast"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>bhawkinson</title>
                <meta name="description" content="View my personal website!" />
                <meta
                    property="og:title"
                    content="Beau Hawkinson's website. Web Developer. Interested in web3."
                />
                <link rel="icon" href="/two.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                {/* <script async src="https://cdn.splitbee.io/sb.js"></script> */}
            </Head>
            <ThemeProvider attribute="class">
                <Component {...pageProps} />
                <Toaster position="top-right" reverseOrder={false} />
            </ThemeProvider>
        </>
    )
}
