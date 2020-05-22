import App from 'next/app'
import React from 'react'
import storeInstance from '../store/store'
import { Provider, useStaticRendering } from 'mobx-react'
import { configure } from 'mobx'

const isServer = !process.browser

configure({ enforceActions: 'observed' })
useStaticRendering(isServer)

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps: pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Provider store={storeInstance}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default MyApp
