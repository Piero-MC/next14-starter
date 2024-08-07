import Link from 'next/link';
import React from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        }
    ];

    const session=true
    const isAdmin=true
    return (
        <div className={styles.links}>
            {links.map((link=>(
                <NavLink
                items={link}
                key={link.title}
            />
            )))}{
                
            }
        </div>
    )
}

export default Links