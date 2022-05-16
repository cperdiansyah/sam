import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Costumers from '../components/Costumers';

export default function Home() {
  const data = [
    {
      src: '/static/images/asko-mandiri-energi-logo-blue.png',
      alt: 'asko mandiri energi logo',
      width: 300,
      height: 50,
    },
    {
      src: '/static/images/digital-mediatama-maxima-logo-original.png',
      alt: 'digital media tama maxima logo',
      width: 300,
      height: 50,
    },
  ];
  return (
    <>
      <Layout pageTitle={'Home'}>
        <Hero />
        <Costumers />
      </Layout>
    </>
  );
}
