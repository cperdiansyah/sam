import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

import styles from './layout.module.css';

const index = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>PT Sentra Awan Maxima | {pageTitle}</title>
        <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
      </Head>
      <Header />
      <div className={`children-content ${styles['padding-layout']}`}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default index;
