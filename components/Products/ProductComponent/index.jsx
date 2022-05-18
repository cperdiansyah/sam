import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

const index = (props) => {
  const { srcImage, title, description, width, height, href } = props;
  return (
    <div className={`col-lg-4 col-md-6 col-12 ${styles['product-components']}`}>
      <div className='product-components-wrapper '>
        <div className='img-wrapper'>
          <Image
            src={srcImage}
            alt={title}
            width={width}
            height={height}
            layout='responsive'
            sizes='50vw'
            className={` ${styles['product-components__image']}`}
          />
        </div>
        <div className='content-wrapper text-center'>
          <h3 className={`fw-bolder ${styles['content-title']}`}>{title}</h3>
          <p className={`${styles['content-description']} text-left`}>
            {description}
          </p>
          <Link href={href}>
            <a className={`btn text-white  ${styles['btn-product']}`}>
              See More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
