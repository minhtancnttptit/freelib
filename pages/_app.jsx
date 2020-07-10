import Header from '../src/component/Header';
import 'antd/dist/antd.css';
import '../public/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp