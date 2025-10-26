import { WhiteButton } from '@/app/(components)/WhiteButton/WhiteButton';

import { scrollToDiv } from '@/app/(utils)/navigate';

import { HeroTypes } from './Hero.types';

import styles from './Hero.module.css';

const TEXTS = {
	HEADER: {
		pl: 'Twoje Zaufane Źródło Zaawansowanych Technologii Przemysłowych',
		en: 'Your Trusted Source of Advanced Industrial Technologies',
	},
	TEXT: {
		pl: 'Chcesz z nami współpracować? Zapoznaj się ofertą oraz możliwościami jakie oferujemy. Zespół specjalistów jest gotowy odpowiedzieć na wszelkie pytania i dostosować rozwiązania do Twoich indywidualnych potrzeb.',
		en: 'Want to work with us? Explore our offer and the possibilities we provide. Our team of specialists is ready to answer any questions and tailor solutions to your individual needs.',
	},
	BUTTON: {
		pl: 'OFERTA',
		en: 'OFFER',
	},
};

export const Hero = ({ lang }: HeroTypes) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.left}>
					<h1 className={styles.mainHeading}>PKW Engineering</h1>
					<h2 className={styles.secondHeading}>{TEXTS.HEADER[lang]}</h2>
					<p className={styles.text}>{TEXTS.TEXT[lang]}</p>
					<WhiteButton
						onClick={() => scrollToDiv('offer')}
						width='300px'
						height='60px'
						text={TEXTS.BUTTON[lang]}
					/>
				</div>
				<div className={styles.right}>
					<img src='/hero.png' alt='Energia odnawialna' className={styles.image} />
				</div>
			</div>
		</div>
	);
};
