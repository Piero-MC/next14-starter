"use client"
import React from 'react'
import Link from 'next/link';
import styles from './navLink.module.css'
import { usePathname } from 'next/navigation';

const navLink = ({items}) => {
  const pathName= usePathname();
    return (
        <Link 
        href={items.path} 
        className={`${styles.container} ${pathName === items.path && styles.active}` }>
            {items.title}
        </Link>
  );
};

export default navLink