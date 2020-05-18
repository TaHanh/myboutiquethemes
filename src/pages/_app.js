import App from 'next/app'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store/redux'
const store = createStore(makeStore)
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // ctx.store.dispatch({ type: 'FOO', payload: 'foo' })

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      // <Provider store={store}>
      <div>
        <Component {...pageProps} />
      </div>
      // </Provider>
    )
  }
}

// export default withRedux(makeStore)(MyApp)
export default MyApp
