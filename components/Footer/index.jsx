import Link from 'next/link';
import Brand from '../Brand';
import styles from './footer.module.css';

const index = () => {
  return (
    <footer className={styles['footer']}>
      <div className='footer-wrapper'>
        <div className={`${styles['footer-top']} container px-0`}>
          <div className='row align-items-center '>
            {/* Brand Footer Left */}
            <div className='footer-left col-lg-4 col-md-4'>
              <div className='brand-footer-section-wrapper '>
                <div className='brand-wrapper w-full mb-3 '>
                  <Brand
                    href='/'
                    src='/static/images/sam-logo-white.png'
                    alt='Sentra Awan Maxima Logo'
                    width='250'
                    height='100'
                  />
                </div>
                <div className='brand-footer-content-wrapper'>
                  <p>
                    Mangkuluhur City, 18th Floor.
                    <span className='d-block'>
                      Jl. Gatot Subroto Kav. 1, Jakarta
                    </span>
                  </p>
                  <p>
                    <i className='bi bi-telephone-fill me-2' />
                    <a href='tel:+622127883335'>021 - 2788 3335</a>
                  </p>
                  <p>
                    <i className='bi bi-envelope me-2' />
                    <a href='mailto:info@cloudmax.id'>info@cloudmax.id</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Right */}
            <div className='col row'>
              {/* Products */}
              <div className='col-lg-4 col-md-4'>
                <div className='footer-widget'>
                  <h4 className='widget-title'>Products</h4>
                  <ul className='list-unstyled'>
                    <li>
                      <Link href='/data-center-&-cloud'>
                        <a className={styles['footer-nav-link']}>
                          Data Center & Cloud
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/big-data'>
                        <a className={styles['footer-nav-link']}>Big Data</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/iot'>
                        <a className={styles['footer-nav-link']}>
                          Interet of Things
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Explore */}
              <div className='col-lg-4 col-md-4'>
                <div className='footer-widget'>
                  <h4 className='widget-title'>Explore</h4>
                  <ul className='list-unstyled footer-nav-list'>
                    <li className='footer-nav-item'>
                      <Link href='/about'>
                        <a className={styles['footer-nav-link']}>About Us</a>
                      </Link>
                    </li>
                    <li className='footer-nav-item'>
                      <Link href='/news'>
                        <a className={styles['footer-nav-link']}>
                          News & Event
                        </a>
                      </Link>
                    </li>
                    <li className='footer-nav-item'>
                      <Link href='/contact'>
                        <a className={styles['footer-nav-link']}>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social */}
              <div className='col-lg-4 col-md-4'>
                <div className='footer-widget'>
                  <h4 className='widget-title'>Follow Us</h4>
                  <ul className='list-unstyled footer-nav-list'>
                    <li className='footer-nav-item'>
                      <Link href='#'>
                        <a className={styles['footer-nav-link']}>
                          <i className='bi bi-facebook me-3' />
                          Facebook
                        </a>
                      </Link>
                    </li>

                    <li className='footer-nav-item'>
                      <Link href='#'>
                        <a className={styles['footer-nav-link']}>
                          <i className='bi bi-linkedin me-3' />
                          Linkedin
                        </a>
                      </Link>
                    </li>

                    <li className='footer-nav-item'>
                      <Link href='#'>
                        <a className={styles['footer-nav-link']}>
                          <i className='bi bi-instagram me-3' />
                          Instagram
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <div className='footer-bottom-wrapper'>
            <p className='text-center m-0'>
              &copy; Copyright{' '}
              <span className='fw-bold'>PT Sentra Awan Maxima</span>. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
