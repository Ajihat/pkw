import { WhiteButton } from '@/app/(components)/WhiteButton/WhiteButton';

import { scrollToDiv } from '@/app/(utils)/navigate';

import { AboutTypes } from './About.types';

import styles from './About.module.css';

const TEXTS = {
	ABOUT_US: {
		pl: 'O nas',
		en: 'About Us',
	},
	FIRST: {
		pl: 'Jesteśmy Twoim zaufanym źródeł zaawansowanych technologii przemysłowych.',
		en: 'We are your trusted source of advanced industrial technologies.',
	},
	SECOND: {
		pl: 'W PKW Engineering łączymy profesjonalizm z innowacją, dostarczając kompleksowe rozwiązania technologiczne dla przemysłu. Specjalizujemy się w zarządzaniu obiegiem wody i energii, oferując produkty takie jak agregaty kogeneracyjne, mikrobiogazownie, magazyny energii elektrycznej, chłodniczej oraz cieplnej.',
		en: 'At PKW Engineering, we combine professionalism with innovation, delivering comprehensive technological solutions for the industry. We specialize in water and energy cycle management, offering products such as cogeneration units, micro biogas plants, and storage systems for electrical, cooling, and thermal energy.',
	},
	THIRD: {
		pl: 'Naszym celem jest rozwój odnawialnych źródeł energii i technologii, które wspierają zrównoważony rozwój i ochronę środowiska. Dołącz do nas i odkryj, jak możemy wspólnie osiągnąć więcej!',
		en: 'Our goal is to develop renewable energy sources and technologies  hat support sustainable growth and environmental protection.',
	},
	BUTTON: {
		pl: 'POROZMAWIAJMY',
		en: "LET'S TALK",
	},
};

export const About = ({ lang }: AboutTypes) => {
	return (
		<div className={styles.wrapper} id='about'>
			<div className={styles.inner}>
				<div className={styles.left}>
					<img src='/ecology.png' alt='Ekologia' className={styles.image} />
				</div>
				<div className={styles.right}>
					<h2 className={styles.heading}>{TEXTS.ABOUT_US[lang]}</h2>
					<h3 className={styles.secondHeading}>{TEXTS.FIRST[lang]}</h3>
					<p className={styles.text}>{TEXTS.SECOND[lang]}</p>
					<p className={styles.text}>{TEXTS.THIRD[lang]}</p>
					<div className={styles.btnHolder}>
						<WhiteButton
							onClick={() => scrollToDiv('footer')}
							width='240px'
							height='60px'
							text={TEXTS.BUTTON[lang]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
