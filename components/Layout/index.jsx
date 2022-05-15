import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const index = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>PT Sentra Awan Maxima | {pageTitle}</title>
        <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default index;
