import { Heading } from '@/app/(components)/Heading/Heading';

import styles from './Brands.module.css';

export const Brands = () => {
	return (
		<div className={styles.wrapper}>
			<Heading
				paragraphText='Stawiamy na partnerskie relacje'
				headingText='Zaufanie i klarowne zasady współpracy'
			/>
			<div className={styles.inner}>asds</div>
		</div>
	);
};
