/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
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
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css'
        />
      </Head>
      <Header />
      <div className={`children-content ${styles['padding-layout']}`}>
        {children}
        <a
          href='https://api.whatsapp.com/send?phone=6281339980260&text=Halo%20PT%20Sentra%20Awan%20Maxima'
          className={`float d-flex align-items-center justify-content-center ${styles['float']}`}
          target='_blank'
          rel='noreferrer'
        >
          <i className={`bi bi-whatsapp my-float ${styles['my-float']}`}></i>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default index;
