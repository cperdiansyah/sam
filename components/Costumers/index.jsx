import React from 'react';
import { Container } from 'react-bootstrap';
import ImageSection from '../imageSection';
import styles from './costumers.module.css';

const index = () => {
  const data = [
    {
      src: '/static/images/asko-mandiri-energi-logo-blue.png',
      alt: 'asko mandiri energi logo',
      width: 300,
      height: 50,
    },
    {
      src: '/static/images/digital-mediatama-maxima-logo-original.png',
      alt: 'digital media tama maxima logo',
      width: 300,
      height: 60,
    },
  ];
  return (
    <section className={`image-list-section ${styles['image-list-section']}`}>
      <div className='image-list-wrapper'>
        <Container>
          <ImageSection imageData={data} />
        </Container>
      </div>
    </section>
  );
};

export default index;
