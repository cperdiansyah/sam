/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

// import styles from './hero.module.css';
import styles from './hero.module.scss';

const index = () => {
  return (
    <section className={`hero-section ${styles['hero-section']}`}>
      <div className='hero-section-wrapper position-relative'>
        <span className={`gredient ${styles['gradient']} `}></span>
        <Container>
          <div className='hero-section-content'>
            <div className='row align-items-center'>
              {/* Content */}
              <div className='col-md-5 col-12'>
                <h1
                  className={`title hero-section-title fw-semibold ${styles.title}`}
                >
                  Next Generation Cloud Solution
                </h1>
                <p className={`hero-section-text ${styles.description}`}>
                  PT Sentra Awan Maxima offers "One Stop Solution" services in
                  the field of Information technology such as Cloud, BigData,
                  and IoT (Internet of Things) solutions
                </p>
                <div className='hero-section-buttons'>
                  <Link href='/contact'>
                    <a className={`btn text-white  ${styles['button-hero']}`}>
                      Get Started
                    </a>
                  </Link>
                </div>
              </div>

              {/* image */}
              <div className='offset-lg-1 col-md-6 col-12'>
                <div className={styles['image-section']}>
                  <div
                    className={`hero-section-image ${styles['hero-section-image']}`}
                  >
                    <Image
                      src='/static/cloud_computing_1.gif'
                      alt='hero-image'
                      width={'400px'}
                      height={'300px'}
                      layout='responsive'
                      objectFit='contain'
                      className={styles['hero-section-image']}
                      priority
                      sizes='50vw'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default index;
