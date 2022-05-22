import React from 'react';
import styles from  './Navbar.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import classNames from 'classnames/bind';
import Image from 'next/image'

let cn = classNames.bind(styles);

export const navLinks = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Peoples', path: '/peoples'},
    {id: 3, title: 'Posts', path: '/posts'},
]

const Navbar = () => {
    const {pathname} = useRouter();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src={'/logo.png'} width={60} height={60} />
            </div>
            <div className={styles.navLinks}>
                {navLinks.map(link => {
                    let linkStyle = cn({
                        active: pathname === link.path
                    })
                    return (
                        <Link key={link.id} href={link.path}>
                            <a className={linkStyle}>{link.title}</a>
                        </Link>
                    )
                })}
            </div>

        </nav>
    );
};

export {Navbar};