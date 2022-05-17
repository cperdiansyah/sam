import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './product.module.css';

const index = ({ productData }) => {
  const { href, imgSrc, imgTitle, imgHeight, imgWidth, title, description } =
    productData;

  return (
    <div className={`services-content col-12 ${styles['content-item']}`}>
      <div className='item d-block text-center'>
        <div className='services-content__image-container'>
          <Image
            src={imgSrc}
            alt={imgTitle}
            height={imgHeight}
            width={imgWidth}
            layout='responsive'
            sizes='50vw'
            className={` ${styles['services-content__image']}`}
          />
        </div>
        <h3 className={`fw-bolder ${styles['content-title']}`}>{title}</h3>
        <p className={`${styles['content-description']} text-left`}>
          {description}
        </p>
        <Link href={href}>
          <a className={`btn text-white  ${styles['btn-product']}`}>
            Learn More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default index;
