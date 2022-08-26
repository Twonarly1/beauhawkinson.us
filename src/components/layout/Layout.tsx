import Head from "next/head"
import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"

type Props = {
    children: any
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>bhawkinson</title>
                <meta name="description" content="View my personal website!" />
                <meta property="og:title" content="I contribute and develop in the Web3 space." />
                <link rel="icon" href="/two.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </Head>
            <>
                <Nav />
                <main> {children}</main>
                <Footer />
            </>
        </>
    )
}

export default Layout
