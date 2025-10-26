import styles from './MobileMenu.module.css';

import { LangSwitchBtn } from '../LangSwitchBtn/LangSwitchBtn';

import { MobileMenuTypes } from './MobileMenu.types';

import { FaFacebookF } from 'react-icons/fa6';

import { scrollToDiv } from '@/app/(utils)/navigate';

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

export const MobileMenu = ({ isMenuOpen, setIsMenuOpen, lang, setLang }: MobileMenuTypes) => {
	return (
		<div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
			<div className={styles.top}>
				<LangSwitchBtn lang={lang} setLang={setLang} />
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li onClick={() => scrollToDiv('about', setIsMenuOpen)} className={styles.menuLink}>
							{TEXTS.ABOUT[lang]}
						</li>
						<li onClick={() => scrollToDiv('offer', setIsMenuOpen)} className={styles.menuLink}>
							{TEXTS.OFFER[lang]}
						</li>
						{/* <li onClick={() => scrollToDiv('portfolio', setIsMenuOpen)} className={styles.menuLink}>
							Portfolio
						</li> */}
						<li onClick={() => scrollToDiv('news', setIsMenuOpen)} className={styles.menuLink}>
							{TEXTS.NEWS[lang]}
						</li>
					</ul>
				</nav>
			</div>
			<div className={styles.bottom}>
				<div className={styles.contact}>
					<p className={styles.head}>{TEXTS.CONTACT[lang]}</p>
					<a href='tel:+48571263242' className={styles.link}>
						Tel: +48 571 263 242
					</a>
					<a href='mailto:biuro@grupapzw.com' className={styles.link}>
						Mail: biuro@grupapzw.com
					</a>
					<p className={styles.link}>Adres: ul. Wojciechowska 15, 20 - 704 Lublin</p>
					<p className={styles.link}>NIP: 118 221 05 99</p>
					<p className={styles.link}>REGON: 386 485 774</p>
				</div>
				<div className={styles.socials}>
					<a
						className={styles.item}
						href='https://www.facebook.com/profile.php?id=100091476144392'
						target='_blank'
					>
						<FaFacebookF size={20} />
					</a>
					<a className={styles.item} href='https://grupapzw.com/' target='_blank'>
						<img src='/logo_pzw.png' alt='Grupa PZW' className={styles.pzw} />
					</a>
				</div>
			</div>
		</div>
	);
};
