'use client';

import CountUp from 'react-countup';

import { Heading } from '@/app/(components)/Heading/Heading';

import styles from './Countup.module.css';

export const Countup = () => {
	return (
		<div className={styles.container}>
			<Heading
				paragraphText='Lorem ipso dolor im semit lorem tu'
				headingText='Lorem ipso dolor im semit lorem tu'
			/>
			<div className={styles.wrapper}>
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
			</div>
		</div>
	);
};
