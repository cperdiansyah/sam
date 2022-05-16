import React from 'react';
import { Container } from 'react-bootstrap';
import ImageSection from '../../ImageSection';
import styles from './costumers.module.css';

const index = () => {
  const data = [
    {
      src: '/static/images/asko-mandiri-energi-logo-blue.png',
      alt: 'asko mandiri energi logo',
      width: 400,
      height: 50,
    },
    {
      src: '/static/images/cahaya pilar jenggala.png',
      alt: 'cahaya pilar jenggala logo',
      width: 400,
      height: 60,
    },
    {
      src: '/static/images/digital-mediatama-maxima-logo-original.png',
      alt: 'digital media tama maxima logo',
      width: 400,
      height: 60,
    },

    {
      src: '/static/images/Jaya Distribusi Retail.png',
      alt: 'Jaya Distribusi Retail logo',
      width: 400,
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
