import Layout from '../components/Layout';
import Hero from '../components/Home/Hero';
import Costumers from '../components/Home/Costumers';
import Solutions from '../components/Home/Solutions';
import Partner from '../components/Home/Partner';

export default function Home() {
  return (
    <>
      <Layout pageTitle={'Home'}>
        <Hero />
        <Costumers />
        <Solutions />
        <Partner />
      </Layout>
    </>
  );
}
