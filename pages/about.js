import Layout from '../components/Layout';

import Hero from '../components/About/Hero';
import CostumerService from '../components/About/CostumerService';

export default function blog() {
  return (
    <Layout>
      <Hero />
      <CostumerService />
    </Layout>
  );
}
