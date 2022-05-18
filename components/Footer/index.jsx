import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Brand from '../Brand';
import styles from './Footer.module.scss';

const footerData = [
  {
    titleSection: 'Products',
    links: [
      {
        title: 'Data Center & Cloud',
        href: '/products/#',
        icon: false,
      },
      {
        title: 'Big Data on Cloud',
        href: '/products/#',
        icon: false,
      },
      {
        title: 'Internet of Things',
        href: '/products/#',
        icon: false,
      },
    ],
  },
  {
    titleSection: 'Explore',
    links: [
      {
        title: 'About Us',
        href: '/about',
        icon: false,
      },
      {
        title: 'News & Event',
        href: '/#',
        icon: false,
      },
      {
        title: 'Contact',
        href: '/contact',
        icon: false,
      },
    ],
  },
  {
    titleSection: 'Follow Us',
    links: [
      {
        title: 'Facebook',
        href: '/#',
        icon: true,
        iconEmblem: 'bi bi-facebook',
      },
      {
        title: 'Linkedin',
        href: '/#',
        icon: true,
        iconEmblem: 'bi bi-linkedin',
      },
      {
        title: 'Instagram',
        href: '/#',
        icon: true,
        iconEmblem: 'bi bi-instagram',
      },
    ],
  },
];

const index = () => {
  return (
    <footer className={styles['footer']}>
      <div className='footer-wrapper'>
        <Container>
          <div className={`${styles['footer-top']} container text-center px-0`}>
            <div className='row align-items-center justify-content-center '>
              {/* Brand Footer Left */}
              <div className='footer-left col-lg-4 col-md-4 '>
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
                {footerData.map((item, index) => (
                  <div className='col-lg-4 col-md-4' key={index}>
                    <div className='footer-widget'>
                      <h4
                        className={`widget-title fw-semibold ${styles['widget-title']}`}
                      >
                        {item.titleSection}
                      </h4>
                      <ul className='list-unstyled'>
                        {item.links.map((link, index) => (
                          <li key={index}>
                            <Link href={link.href}>
                              {link.icon ? (
                                <a className={styles['footer-nav-link']}>
                                  <i
                                    className={`me-3 ${link.iconEmblem} ${styles['footer-nav-icon']}`}
                                  />
                                  {link.title}
                                </a>
                              ) : (
                                <a className={styles['footer-nav-link']}>
                                  {link.title}
                                </a>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles['footer-bottom']}>
            <div className='footer-bottom-wrapper'>
              <p className='text-center m-0'>
                &copy; Copyright{' '}
                <span className='fw-bold'>PT Sentra Awan Maxima</span>. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default index;
