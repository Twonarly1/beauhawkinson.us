import '../styles/globals.css'
import Layout from '../components/Layout'
import { AppProps } from '../../node_modules/next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
