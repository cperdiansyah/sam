import Layout from '../components/Layout';
import Hero from '../components/Home/Hero';
import Costumers from '../components/Home/Costumers';

export default function Home() {
  return (
    <>
      <Layout pageTitle={'Home'}>
        <Hero />
        <Costumers />
      </Layout>
    </>
  );
}
