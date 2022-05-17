import Layout from '../components/Layout';

import Hero from '../components/About/Hero';
import CostumerService from '../components/About/CostumerService';
import VisionMission from '../components/About/VisionMission';

export default function about() {
  return (
    <Layout>
      <Hero />
      <CostumerService />
      <VisionMission />
    </Layout>
  );
}
