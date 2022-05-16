/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Popover } from 'react-bootstrap';

const popover = (
  <Popover id='popover-basic'>
    <Popover.Header as='h3'>Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const index = (props) => {
  const { imageData } = props;
  console.log(imageData);
  return (
    <>
      <div className='image-list-content row align-items-center justify-content-center'>
        {imageData.map((item, index) => (
          <div
            className='hero-section-content col-lg-3 position-relative'
            key={index}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              layout='responsive'
              objectFit='contain'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
