/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

const index = () => {
  return (
    <section className={styles['about-section']}>
      <div className='about-wrapper'>
        <Container>
          <div className='about-content'>
            <div className='row'>
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
                <h3 className={styles['section-title']}>About Us</h3>
                <p className={styles['section-description']}>
                  Pt Sentra Awan Maxima is one of the leading information
                  technology service providers by providing g business solutions
                  to consumers, companies and stakeholders with a strong focus
                  on Information Technology in Indonesia.
                </p>

                <p className={styles['section-description']}>
                  PT. Sentra Awan Maxima offers 'One Stop Solution' services in
                  the field of Information technology such as Cloud, BigData,
                  and IoT (Internet of Things) solutions
                </p>
                <Link href='/about'>
                  <a className='text-decoration-underline text-primary'>
                    Learn More
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