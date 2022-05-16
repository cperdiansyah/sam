import '../styles/globals.css';
import '../styles/bootstrap-icon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //scroll to top on every route change
    window.scrollTo(0, 0);
  },[]);
  return <Component {...pageProps} />;
}

export default MyApp;
