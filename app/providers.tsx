"use client"

import { ThemeProvider } from "next-themes"
// import { WagmiConfig } from "wagmi"
// import { createClient, configureChains, goerli, mainnet } from "wagmi"
// import { InjectedConnector } from "wagmi/connectors/injected"
// import { MetaMaskConnector } from "wagmi/connectors/metaMask"

// import { alchemyProvider } from "wagmi/providers/alchemy"
// import { publicProvider } from "wagmi/providers/public"
// import { NEXT_PUBLIC_ALCHEMY_API_KEY } from "lib/env"
// import { Toaster } from "react-hot-toast"

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
// const { chains, provider, webSocketProvider } = configureChains(
//     [mainnet, goerli],
//     [alchemyProvider({ apiKey: NEXT_PUBLIC_ALCHEMY_API_KEY }), publicProvider()],
//     { targetQuorum: 1 },
// )

// // Set up client
// const client = createClient({
//     autoConnect: true,
//     connectors: [
//         new MetaMaskConnector({ chains }),

//         new InjectedConnector({
//             chains,
//             options: {
//                 name: "Injected",
//                 shimDisconnect: true,
//             },
//         }),
//     ],
//     provider,
//     // storage: createStorage({ storage: window.localStorage }),
//     webSocketProvider,
// })

function Providers({ children }: { children: React.ReactNode }) {
    return (
        // <WagmiConfig client={client}>
        <ThemeProvider enableSystem={true} attribute="class">
            {children}
            {/* <Toaster position="top-right" reverseOrder={false} /> */}
        </ThemeProvider>
        // </WagmiConfig>
    )
}

export default Providers
