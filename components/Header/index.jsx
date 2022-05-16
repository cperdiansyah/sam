/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import Brand from '../Brand';
import styles from './Header.module.css';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { useEffect, useState } from 'react';

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
    href: '/contact',
  },
];

const index = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState('');

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(20);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 170;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    } else {
      setBackgroundTransparacy(1);
    }
  }, [clientWindowHeight]);

  return (
    <header
      className={` ${styles.header}`}
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px  4px  10px -1px`,
      }}
    >
      <Navbar expand='lg'>
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
