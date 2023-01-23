import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import { Toaster } from "react-hot-toast"
import Head from "next/head"
import { Header } from "src/components"
import { AppProps } from "next/app"
import { WagmiConfig } from "wagmi"
import { createClient, createStorage, configureChains, goerli, mainnet } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"

import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { NEXT_PUBLIC_ALCHEMY_API_KEY } from "src/lib/env"

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
    [mainnet, goerli],
    [alchemyProvider({ apiKey: NEXT_PUBLIC_ALCHEMY_API_KEY }), publicProvider()],
    { targetQuorum: 1 },
)

// Set up client
const client = createClient({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),

        new InjectedConnector({
            chains,
            options: {
                name: "Injected",
                shimDisconnect: true,
            },
        }),
    ],
    provider,
    // storage: createStorage({ storage: window.localStorage }),
    webSocketProvider,
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
