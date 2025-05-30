import { WhiteButton } from '@/app/(components)/WhiteButton/WhiteButton';

import { scrollToDiv } from '@/app/(utils)/navigate';

import styles from './Hero.module.css';

export const Hero = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<div className={styles.left}>
					<h1 className={styles.mainHeading}>PKW Engineering</h1>
					<h2 className={styles.secondHeading}>
						Twoje Zaufane Źródło Zaawansowanych Technologii Przemysłowych
					</h2>
					<p className={styles.text}>
						Chcesz z nami współpracować? Zapoznaj się ofertą oraz możliwościami jakie oferujemy. Zespół
						specjalistów jest gotowy odpowiedzieć na wszelkie pytania i dostosować rozwiązania do Twoich
						indywidualnych potrzeb.
					</p>
					<WhiteButton onClick={() => scrollToDiv('offer')} width='300px' height='60px' text='OFERTA' />
				</div>
				<div className={styles.right}>
					<img src='/hero.png' alt='Energia odnawialna' className={styles.image} />
				</div>
			</div>
		</div>
	);
};
