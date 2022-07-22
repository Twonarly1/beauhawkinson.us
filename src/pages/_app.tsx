import '../styles/globals.css'
import { AppProps } from '../../node_modules/next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function App({ Component, pageProps }: AppProps) {
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
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
