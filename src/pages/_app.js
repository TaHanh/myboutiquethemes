import App from "next/app";
import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducer from "../store/redux";

import withRedux from "next-redux-wrapper";
import storeInstance from "../store/store";
let store = createStore(reducer);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    storeInstance.initApp();
    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      // <Provider store={store}>
      <Component {...pageProps} />
      // </Provider>
    );
  }
}

export default MyApp;
