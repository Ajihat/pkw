import Image from 'next/image';

import { WhiteButton } from '@/app/(components)/WhiteButton/WhiteButton';

import styles from './About.module.css';

export const About = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.left}>
					<Image fill src='/ecology.png' alt='Ekologia' className={styles.image} />
				</div>
				<div className={styles.right}>
					<h2 className={styles.heading}>O nas</h2>
					<h3 className={styles.secondHeading}>
						Jesteśmy Twoim zaufanym źródeł zaawansowanych technologii przemysłowych.
					</h3>
					<p className={styles.text}>
						W PKW Engineering łączymy profesjonalizm z innowacją, dostarczając kompleksowe rozwiązania
						technologiczne dla przemysłu. Specjalizujemy się w zarządzaniu obiegiem wody i energii, oferując
						produkty takie jak agregaty kogeneracyjne, mikrobiogazownie, magazyny energii i wody.
					</p>
					<p className={styles.text}>
						Naszym celem jest rozwój odnawialnych źródeł energii i technologii, które wspierają zrównoważony
						rozwój i ochronę środowiska. Dołącz do nas i odkryj, jak możemy wspólnie osiągnąć więcej!
					</p>
					<div className={styles.btnHolder}>
						<WhiteButton width='240px' height='60px' text='POROZMAWIAJMY' />
					</div>
				</div>
			</div>
		</div>
	);
};
