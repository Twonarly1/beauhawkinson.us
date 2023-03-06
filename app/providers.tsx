"use client"

import { ThemeProvider } from "next-themes"
import { ApolloProvider } from "@apollo/client"
import { SessionProvider } from "next-auth/react"
import apolloClient from "lib/apollo-client"

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ApolloProvider client={apolloClient}>
            <SessionProvider>
                <ThemeProvider enableSystem={true} attribute="class">
                    {children}
                </ThemeProvider>
            </SessionProvider>
        </ApolloProvider>
    )
}

export default Providers
