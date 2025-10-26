'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import { Heading } from '@/app/(components)/Heading/Heading';

import { CountupTypes } from './Countup.types';

import styles from './Countup.module.css';

const TEXTS = {
	HEADING_TEXT: {
		pl: 'Innowacje z siłą GRUPY PZW',
		en: 'Innovation with the Power of PZW Group',
	},
	YEARS: {
		pl: 'lat',
		en: 'years',
	},
	EXP: {
		pl: 'doświadczenia na rynku',
		en: 'of market experience',
	},
	PROJECTS: {
		pl: 'zrealizowanych projektów',
		en: 'projects successfully delivered',
	},
	CLIENTS: {
		pl: 'zadowolonych klientów',
		en: 'customer satisfaction',
	},
};

export const Countup = ({ lang }: CountupTypes) => {
	const { ref, inView } = useInView({
		triggerOnce: true, // Licznik uruchamia się tylko raz
		threshold: 0.5, // Komponent musi być w 50% widoczny
	});
	return (
		<div className={styles.container}>
			<Heading paragraphText='PKW Engineering' headingText={TEXTS.HEADING_TEXT[lang]} />
			<div className={styles.wrapper} ref={ref}>
				{inView && (
					<div className={styles.inner}>
						<div className={styles.item}>
							<div>
								<div className={styles.counter}>
									<CountUp start={0} end={40} duration={3.75} />
									{TEXTS.YEARS[lang]}
								</div>
								<p className={styles.text}>{TEXTS.EXP[lang]}</p>
							</div>
						</div>
						<div className={styles.line}></div>
						<div className={styles.item}>
							<div>
								<div className={styles.counter}>
									<CountUp start={0} end={1000} duration={3.75} />+
								</div>
								<p className={styles.text}>{TEXTS.EXP[lang]}</p>
							</div>
						</div>
						<div className={styles.line}></div>
						<div className={styles.item}>
							<div>
								<div className={styles.counter}>
									<CountUp start={0} end={100} duration={3.75} />%
								</div>
								<p className={styles.text}>{TEXTS.CLIENTS[lang]}</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
