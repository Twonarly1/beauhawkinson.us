import '../styles/globals.css'
import { AppProps } from '../../node_modules/next/app'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
