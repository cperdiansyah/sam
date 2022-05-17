/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './index.module.css';

import Product from '../Product';

const productData = [
  {
    href: '/products/data-center-&-cloud',
    imgSrc: `/static/images/data-center.jpeg`,
    imgTitle: 'Data Center & Cloud',
    imgHeight: 170,
    imgWidth: 300,
    title: 'Data Center & Cloud',
    description:
      'Server, Storage, Network, Firewall Security, Data Backup & Recovery, Data Center Building & DRC, CCTV & Access Door',
  },
  {
    href: '/products/big-data',
    imgSrc: `/static/images/big-data.jpg`,
    imgTitle: 'Big Data on Cloud',
    imgHeight: 170,
    imgWidth: 300,
    title: 'Big Data on Cloud',
    description:
      'Realtime data processing, Dashboard, Business Intelligent, Data Analytic, Data Forensic.',
  },
  {
    href: '/products/iot',
    imgSrc: `/static/images/abstract-iot-1000x600.jpg`,
    imgTitle: 'Internet of Things',
    imgHeight: 170,
    imgWidth: 300,
    title: 'Internet of Things',
    description:
      'LiDAR (Light Detection and Ranging), Drone Inspection, kerLink LoRaWan, Smart Meter Solution, sensor, automation',
  },
];

const index = () => {
  return (
    <section className={styles['solutions-section']}>
      <Container>
        <div className='solutions-wrapper row'>
          {/* Title */}
          <div className='col-12 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0'>
            <h3 className={styles['section-title']}>
              We Offers{' '}
              <span className='d-block italic fst-italic'>
                'One Stop Solution'{' '}
              </span>{' '}
              <span className='d-block'>Services </span>
            </h3>
          </div>

          {/* content left */}

          <div className='col-12 col-lg-5 offset-lg-1 col-xl-6 offset-xl-0 '>
            <div className={`row ${styles['solutions-left']}`}>
              <Product productData={productData[1]} />
            </div>
          </div>

          {/* Content right */}
          <div className='col-12 col-lg-5 col-xl-6 '>
            <div className={`row ${styles['solutions-right']}`}>
              <Product productData={productData[0]} />
              <Product productData={productData[2]} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default index;
