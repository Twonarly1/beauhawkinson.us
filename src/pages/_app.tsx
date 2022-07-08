import '../styles/globals.css'
import { AppProps } from '../../node_modules/next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>bhawkinson</title>
        <link rel="icon" href="/two.png" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <div className=" w-full bg-gray-100 ">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
