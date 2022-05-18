/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from './index.module.scss';

const index = (props) => {
  const { imageData } = props;
  // console.log(imageData);
  return (
    <>
      <div className='image-list-content row align-items-center justify-content-center'>
        {imageData.map((item, index) => (
          <div
            className={`hero-section-content col-lg-3 col-12 position-relative ${styles['hero-section-content']}`}
            key={index}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              layout='responsive'
              sizes='50vw'
              className={` ${styles['image-section']}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
