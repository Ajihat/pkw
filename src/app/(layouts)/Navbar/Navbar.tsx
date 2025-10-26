'use client';

import { useState } from 'react';

import { TransparentButton } from '@/app/(components)/TransparentButton/TransparentButton';
import { MobileMenu } from '@/app/(components)/MobileMenu/MobileMenu';
import { LangSwitchBtn } from '@/app/(components)/LangSwitchBtn/LangSwitchBtn';

import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLargeFill } from 'react-icons/ri';

import { scrollToDiv } from '@/app/(utils)/navigate';

import { NavbarTypes } from './Navbar.types';

import styles from './Navbar.module.css';

const TEXTS = {
	ABOUT: {
		pl: 'O firmie',
		en: 'About Us',
	},
	OFFER: {
		pl: 'Oferta',
		en: 'Offer',
	},
	NEWS: {
		pl: 'Aktualności',
		en: 'News',
	},
	CONTACT: {
		pl: 'Kontakt',
		en: 'Contact',
	},
};

export const Navbar = ({ lang, setLang }: NavbarTypes) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClick = () => setIsMenuOpen((prevState) => !prevState);

	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.logoWrapper}>
					<img src='/logo.svg' alt='PKW logo' />
				</div>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li onClick={() => scrollToDiv('about')} className={styles.listItem}>
							{TEXTS.ABOUT[lang]}
						</li>
						<li onClick={() => scrollToDiv('offer')} className={styles.listItem}>
							{TEXTS.OFFER[lang]}
						</li>
						{/* <li onClick={() => scrollToDiv('portfolio')} className={styles.listItem}>
							Portfolio
						</li> */}
						<li onClick={() => scrollToDiv('news')} className={styles.listItem}>
							{TEXTS.NEWS[lang]}
						</li>
					</ul>
				</nav>

				<div className={styles.btnHolder}>
					<LangSwitchBtn lang={lang} setLang={setLang} />
					<TransparentButton
						onClick={() => scrollToDiv('footer')}
						text={TEXTS.CONTACT[lang]}
						width='174px'
						height='60px'
					/>
				</div>
				<div onClick={handleClick} className={styles.hamburger}>
					{isMenuOpen ? (
						<RiCloseLargeFill color='white' size={32} />
					) : (
						<RxHamburgerMenu color='white' size={32} />
					)}
				</div>
			</div>
			<MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} lang={lang} setLang={setLang} />
		</div>
	);
};
