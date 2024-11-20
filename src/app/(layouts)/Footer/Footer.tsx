import { WhiteButton } from '@/app/(components)/WhiteButton/WhiteButton';

import { FaFacebookF } from 'react-icons/fa6';
import { LuInstagram } from 'react-icons/lu';
import { FaYoutube } from 'react-icons/fa';

import styles from './Footer.module.css';

export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.content}>
					<h2 className={styles.heading}>Chcesz dowiedzieć się więcej o naszych produktach i usługach?</h2>
					<p className={styles.paragraph}>
						A może masz pytania dotyczące współpracy?
						<br /> Jesteśmy tutaj, aby pomóc!
					</p>
					<WhiteButton text='NAPISZ DO NAS' width='200px' height='48px' />
					<div className={styles.links}>
						<p className={styles.contact}>Kontakt</p>
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
					<div className={styles.bottom}>
						<div className={styles.left}>
							<a>
								<FaFacebookF size={15} />
							</a>
							<a>
								<LuInstagram size={15} />
							</a>
							<a>
								<FaYoutube size={15} />
							</a>
						</div>
						<div className={styles.right}>{`© ${currentYear} — All Rights Reserved`}</div>
					</div>
				</div>
			</div>
		</div>
	);
};