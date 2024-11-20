import styles from './MobileMenu.module.css';

import { MobileMenuTypes } from './MobileMenu.types';

import { FaFacebookF } from 'react-icons/fa6';
import { LuInstagram } from 'react-icons/lu';
import { FaYoutube } from 'react-icons/fa';

export const MobileMenu = ({ isMenuOpen }: MobileMenuTypes) => {
	return (
		<div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
			<div className={styles.top}>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.menuLink}>O firmie</li>
						<li className={styles.menuLink}>Oferta</li>
						<li className={styles.menuLink}>Portfolio</li>
						<li className={styles.menuLink}>Aktualności</li>
					</ul>
				</nav>
			</div>
			<div className={styles.bottom}>
				<div className={styles.contact}>
					<p className={styles.head}>Kontakt</p>
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
					<a>
						<FaFacebookF size={30} />
					</a>
					<a>
						<LuInstagram size={30} />
					</a>
					<a>
						<FaYoutube size={30} />
					</a>
				</div>
			</div>
		</div>
	);
};
