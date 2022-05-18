import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //scroll to top on every route change
    window.scrollTo(0, 0);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
