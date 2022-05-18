import React from 'react';
import { Container } from 'react-bootstrap';
import ProductComponent from './ProductComponent';

import styles from './product.module.css';

const productData = [
  {
    href: '/products/#',
    srcImage: '/static/images/data-center.jpeg',
    height: 150,
    width: 200,
    title: 'Data Center & Cloud',
    description:
      'Server, Storage, Network, Firewall Security, Data Backup & Recovery, Data Center Building & DRC, CCTV & Access Door',
  },
  {
    href: '/products/#',
    srcImage: '/static/images/big-data.jpg',
    height: 150,
    width: 200,
    title: 'Big Data on Cloud',
    description:
      'Realtime data processing, Dashboard, Business Intelligent, Data Analytic, Data Forensic.',
  },
  {
    href: '/products/#',
    srcImage: '/static/images/abstract-iot-1000x600.jpg',
    height: 150,
    width: 200,
    title: 'Internet of Things',
    description:
      'LiDAR (Light Detection and Ranging), Drone Inspection, kerLink LoRaWan, Smart Meter Solution, sensor, automation',
  },
];

const index = () => {
  return (
    <section className={styles['product-section']}>
      <div className='product-section-wrapper'>
        <Container>
          <h2 className={`text-center title ${styles['title-section']}`}>
            Our Product
          </h2>
          <div className='product-section-wrapper'>
            <div className='row justify-content-center'>
              {productData.map((product, index) => (
                <ProductComponent {...product} key={index} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default index;
