import React from 'react';
import { Container } from 'react-bootstrap';
import ImageSection from '../../ImageSection';
import styles from './partner.module.scss';

const index = () => {
  const data = [
    {
      src: '/static/images/acronis-logo.png',
      alt: 'Acronis',
      width: 400,
      height: 50,
    },
    {
      src: '/static/images/id-cloud-max-logo.png',
      alt: 'Idcloudmax logo',
      width: 400,
      height: 60,
    },
    {
      src: '/static/images/samgeo.png',
      alt: 'Samgeo logo',
      width: 400,
      height: 60,
    },

    {
      src: '/static/images/Tencent-Cloud-logo-compro.png',
      alt: 'Tencent Cloud logo',
      width: 400,
      height: 60,
    },
  ];
  return (
    <section
      className={`partnership-image-list-section ${styles['image-list-section']}`}
    >
      <div className='image-list-wrapper'>
        <Container>
          <h2 className={`text-center fw-bolder ${styles['title-color']}`}>
            Our Partnership
          </h2>
          <ImageSection imageData={data} />
        </Container>
      </div>
    </section>
  );
};

export default index;
