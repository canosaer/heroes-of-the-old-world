import Head from "next/head"
import type { AppProps } from 'next/app'

// Global Styles
import "../styles/globals.scss"
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// Global Context
import { Store } from "../context/store"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Heroes of the Old World</title>
        <meta name="description" content="A browser based RPG by Eric Canosa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Store>
          <Component className="app" {...pageProps} />
      </Store>
    </>
  )
}