'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import { Heading } from '@/app/(components)/Heading/Heading';

import styles from './Countup.module.css';

export const Countup = () => {
	const { ref, inView } = useInView({
		triggerOnce: true, // Licznik uruchamia się tylko raz
		threshold: 0.5, // Komponent musi być w 50% widoczny
	});
	return (
		<div className={styles.container}>
			<Heading
				paragraphText='Lorem ipso dolor im semit lorem tu'
				headingText='Lorem ipso dolor im semit lorem tu'
			/>
			<div className={styles.wrapper} ref={ref}>
				{inView && (
					<div className={styles.inner}>
						<div className={styles.item}>
							<div>
								<div className={styles.counter}>
									<CountUp start={0} end={16} duration={3.75} />K
								</div>
								<p className={styles.text}>Text here</p>
							</div>
						</div>
						<div className={styles.line}></div>
						<div className={styles.item}>
							<div>
								<div className={styles.counter}>
									<CountUp start={0} end={189} duration={3.75} />+
								</div>
								<p className={styles.text}>Text here</p>
							</div>
						</div>
						<div className={styles.line}></div>
						<div className={styles.item}>
							<div>
								<div className={styles.counter}>
									<CountUp start={0} end={100} duration={3.75} />%
								</div>
								<p className={styles.text}>Text here</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
