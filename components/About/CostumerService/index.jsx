import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import styles from './index.module.css';

const index = () => {
  return (
    <section className={styles['costumer-service-section']}>
      <div className='cs-wrapper'>
        <Container>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-6 ps-4'>
              <p className={styles['section-description']}>
                We provide innovative and integrated services, by adopting high
                quality and efficient IT services to ensure our services can
                help customers always be ready to quickly respond to changing
                market dynamics and increase competitiveness.
              </p>
            </div>

            <div className='col-12 col-lg-6 '>
              <Image
                src='/static/svg/cs.svg'
                alt='Costumer Service'
                width={400}
                height={300}
                className={styles['about-us-image']}
                layout='responsive'
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default index;
