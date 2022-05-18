/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.scss';

const index = () => {
  return (
    <section className={styles['about-section']}>
      <div className='about-wrapper'>
        <Container>
          <div className='about-content'>
            <div
              className={`row align-items-center ${styles['about-content-wrapper']}`}
            >
              <div className='col-12 col-lg-6 '>
                <Image
                  src='/static/images/5-Reasons-Why-Cloud-Can-Transform-Your-Business-1.jpg'
                  alt='About Us'
                  width={400}
                  height={300}
                  className={styles['about-us-image']}
                  layout='responsive'
                />
              </div>
              <div
                className={`col-12 col-lg-6 ps-4 ${styles['about-paragraph']}`}
              >
                <h3 className={`title ${styles['section-title']}`}>
                  About Our Company
                </h3>
                <p className={styles['section-description']}>
                  PT Sentra Awan Maxima is one of the leading information
                  technology service providers by providing business solutions
                  to consumers, companies and stakeholders with a strong focus
                  on Information Technology in Indonesia.
                </p>

                <p className={styles['section-description']}>
                  We offers{' '}
                  <span className='fst-italic'>'One Stop Solution'</span>{' '}
                  services in the field of Information technology such as Cloud,
                  BigData, and IoT (Internet of Things) solutions
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default index;
