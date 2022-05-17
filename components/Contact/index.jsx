import React from 'react';
import Form from './Form';
import { Container } from 'react-bootstrap';
import styles from './contact.module.css';

function index() {
  return (
    <section className={styles['form-page']}>
      <Container>
        <div className={styles['form-section-wrapper']}>
          <div className='title-wrapper'>
            <h1 className={`fw-bolder ${styles['title-form']}`}>Contact Us</h1>
            <p className={styles['subtitle-form']}>
              Information Center Services PT Sentra Awan Maxima
            </p>
          </div>
          <div className='form-section-content'>
            <div className={styles['contact-information-card']}>
              <div className='form-wraper p-5'>
                <h2
                  className={`text-center fw-semibold ${styles['border-title']}`}
                >
                  Send Us An Email
                </h2>
                <Form />
              </div>
            </div>
          </div>

          <div className={`mt-5 ${styles['contact-information-card']}`}>
            <div className='contact-information-card-wrapper'>
              <div className='row'>
                <div className='col-md-6 col-12'>
                  <div className={styles['contact-information-card-content']}>
                    <h3 className={`fw-semibold mb-3 ${styles['title-form']}`}>
                      Address
                    </h3>
                    <p className={styles['contact-text']}>
                      Mangkuluhur City, 18th Floor.
                      <span className='d-block'>
                        Jl. Gatot Subroto Kav. 1, Jakarta
                      </span>
                    </p>
                    <p>
                      <a
                        href='tel:+622127883335'
                        className={styles['contact-text']}
                      >
                        <i className='bi bi-telephone-fill fs-5 me-3' />
                        021 - 2788 3335
                      </a>
                    </p>
                    <p>
                      <a
                        href='mailto:info@cloudmax.id'
                        className={styles['contact-text']}
                      >
                        <i className='bi bi-envelope fs-5 me-3' />
                        info@cloudmax.id
                      </a>
                    </p>
                  </div>
                </div>
                <div className='col-md-6 col-12'>
                  <div className={styles['contact-maps-card-content']}>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.580298564172!2d106.81390773710127!3d-6.221309598315826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f10a02440f91%3A0x3c18ecb1d5ab458a!2sMangkuluhur%20City%20Office%20Tower!5e0!3m2!1sid!2sid!4v1652702455162!5m2!1sid!2sid'
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                      className={styles['contact-maps-card-content']}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default index;
