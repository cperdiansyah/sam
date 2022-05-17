/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const index = (props) => {
  const { imageData } = props;
  // console.log(imageData);
  return (
    <>
      <div className='image-list-content row align-items-center justify-content-center'>
        {imageData.map((item, index) => (
          <div
            className='hero-section-content col-lg-3 col-12 position-relative'
            key={index}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              layout='responsive'
              objectFit='contain'
              sizes='50vw'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
