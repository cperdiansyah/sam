import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const index = ({ productData }) => {
  const { href, imgSrc, imgTitle, imgHeight, imgWidth, title, description } =
    productData;
  // console.log(productData);
  return (
    <div className='services-content col-12'>
      <Link href={href}>
        <a className='item d-block text-center'>
          <div className='services-content__image-container'>
            <Image
              src={imgSrc}
              alt={imgTitle}
              height={imgHeight}
              width={imgWidth}
              layout='responsive'
              objectFit='contain'
            />
          </div>
          <h3 className='content-title'>{title}</h3>
          <p className='content-desc text-left'>{description}</p>
          <p className='read-more text-left'>Read More</p>
        </a>
      </Link>
    </div>
  );
};

export default index;
