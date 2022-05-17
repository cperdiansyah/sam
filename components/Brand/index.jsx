import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Brand.module.css';

export default function index(props) {
  const className = [props.className];
  const { width, height } = props;
  const size = width && height ? { width, height } : { layout: 'fill' };

  return (
    <Link href={props.href}>
      <a className={className.join(' ')}>
        <Image
          src={props.src}
          alt={props.alt}
          {...size}
          objectFit='contain'
          className={`w-full ${styles.brand}`}
        />
      </a>
    </Link>
  );
}
