import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './index.module.css';

const index = () => {
  return (
    <section className={styles['section']}>
      <div className='vission-mission-wrapper'>
        <Container>
          <div className='vission-mission-desc'>
            <h2 className={`text-center fw-bolder ${styles['section-title']}`}>
              We have a strong vission and mission
            </h2>
            <p className={`text-center ${styles['section-description']}`}>
              To become one of the trusted partners in providing Information
              Technology services to consumers to be able to improve customer
              business, to make direct contributions to consumers, companies,
              and shareholders
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default index;
