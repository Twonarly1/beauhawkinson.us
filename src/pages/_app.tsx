import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { Toaster } from "react-hot-toast"
import Head from "next/head"
import { Header } from "src/components"
import { AppProps } from "next/app"
import { WagmiConfig, createClient, configureChains, chain, defaultChains } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { NEXT_PUBLIC_ALCHEMY_API_KEY } from "src/lib/env"

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
    alchemyProvider({ apiKey: NEXT_PUBLIC_ALCHEMY_API_KEY }),
])

const client = createClient({
    autoConnect: false,
    connectors: [new MetaMaskConnector({ chains: [chain.goerli] })],
    // webSocketProvider,
    provider,
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>bhawkinson</title>
                <meta name="description" content="View my personal website!" />
                <meta
                    property="og:title"
                    content="Beau Hawkinson's website. Fronted, Backend, Web3"
                />
                <link rel="icon" href="/two.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                {/* <script async src="https://cdn.splitbee.io/sb.js"></script> */}
            </Head>
            <WagmiConfig client={client}>
                <ThemeProvider attribute="class">
                    <Header />
                    <Component {...pageProps} />
                    <Toaster position="top-right" reverseOrder={false} />
                </ThemeProvider>
            </WagmiConfig>
        </>
    )
}
