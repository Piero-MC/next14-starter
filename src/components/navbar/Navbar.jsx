import Link from 'next/link'
import React from 'react'
import Links from './links/Links'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.links}>
        <Links className={styles.links}/>
      </ul>
    </div>
  )
}

export default Navbar