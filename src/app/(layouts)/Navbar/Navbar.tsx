'use client';

import { useState } from 'react';
import Image from 'next/image';

import { TransparentButton } from '@/app/(components)/TransparentButton/TransparentButton';
import { MobileMenu } from '@/app/(components)/MobileMenu/MobileMenu';

import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLargeFill } from 'react-icons/ri';

import styles from './Navbar.module.css';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => setIsMenuOpen((prevState) => !prevState);

	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.logoWrapper}>
					<Image src='/logo.jpg' layout='responsive' width={251} height={96} alt='PKW logo' />
				</div>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.listItem}>O Firmie</li>
						<li className={styles.listItem}>Oferta</li>
						<li className={styles.listItem}>Portfolio</li>
						<li className={styles.listItem}>Aktualności</li>
					</ul>
				</nav>
				<div className={styles.btnHolder}>
					<TransparentButton text='Kontakt' width='174px' height='60px' />
				</div>
				<div onClick={handleClick} className={styles.hamburger}>
					{isMenuOpen ? (
						<RiCloseLargeFill color='white' size={32} />
					) : (
						<RxHamburgerMenu color='white' size={32} />
					)}
				</div>
			</div>
			<MobileMenu isMenuOpen={isMenuOpen} />
		</div>
	);
};
