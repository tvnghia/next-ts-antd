import React, { ReactElement, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { NextPage } from 'next'
import { debounce as _debounce } from 'lodash'
import Head from 'next/head'
import { AuthContextProvider } from 'context/auth'

import 'antd/dist/antd.css'
import './globals.scss'
import { CursorContextProvider } from 'context/cursor'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactElement) => page)

  useEffect(() => {
    const resetFullVH = _debounce(
      () => document.documentElement.style.setProperty('--full-view-height', `${window.innerHeight}px`),
      300,
    )
    resetFullVH()
    window.addEventListener('resize', resetFullVH)

    return () => window.removeEventListener('resize', resetFullVH)
  }, [])

  return (
    <>
      <Head>
        <title>NFT</title>
      </Head>

      <AuthContextProvider>
        <CursorContextProvider>{getLayout(<Component {...pageProps} />)}</CursorContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default appWithTranslation(App)
