import React, { ReactElement, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { NextPage } from 'next'
import { debounce as _debounce } from 'lodash'
import Head from 'next/head'

import 'antd/dist/antd.css'
import './globals.scss'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout | any
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
        <title>Deep sea</title>
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default appWithTranslation(App)
