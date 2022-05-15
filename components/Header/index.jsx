import Link from 'next/link';
import Brand from '../Brand';
import styles from './Header.module.css';

import { Container, Nav, Navbar } from 'react-bootstrap';

const navList = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Product',
    href: '#',
  },
  {
    title: 'News & Event',
    href: '#',
  },
  {
    title: 'Contact',
    href: '#',
  },
];

const index = () => {
  return (
    <header className={`bg-white ${styles.header}`}>
      <Navbar bg='white' expand='lg'>
        <Container>
          <Link href='/'>
            <div className='navbar-brand'>
              <Brand
                href='/'
                src='/static/images/sam-logo-blue.png'
                alt='Sentra Awan Maxima Logo'
                width='150'
                height='50'
              />
            </div>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {navList.map((item, index) => (
                <Link href={item.href} key={index}>
                  <a className={`nav-link ${styles['nav-link']}`}>
                    {item.title}
                  </a>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default index;
