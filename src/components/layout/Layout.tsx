import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>bhawkinson</title>
        <meta name="description" content="View my personal website!" />
        <meta
          property="og:title"
          content="I contribute and develop in the Web3 space."
        />
        <link rel="icon" href="/two.png" />
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
