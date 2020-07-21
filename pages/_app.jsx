import React from 'react';
import { Provider } from 'mobx-react';
import Header from '../src/component/Header';
import 'antd/dist/antd.css';

import store from './../src/store';
import '../public/styles.css';



function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider {...store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp