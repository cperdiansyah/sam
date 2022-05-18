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
            <div className='row align-items-center'>
              <div className='col-12 col-lg-6 '>
                <Image
                  src='/static/images/5-Reasons-Why-Cloud-Can-Transform-Your-Business-1.jpg'
                  alt='About Us'
                  width={400}
                  height={250}
                  className={styles['about-us-image']}
                  layout='responsive'
                />
              </div>
              <div className='col-12 col-lg-6 ps-4'>
                <h3 className={`fw-bolder ${styles['section-title']}`}>
                  About Us
                </h3>
                <p className={styles['section-description']}>
                  PT Sentra Awan Maxima is one of the leading information
                  technology service providers by providing g business solutions
                  to consumers, companies and stakeholders with a strong focus
                  on Information Technology in Indonesia.
                </p>

                <Link href='/about'>
                  <a className={` text-white ${styles['btn-link']}`}>
                    Read More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default index;
