import { HeadingTypes } from './Heading.types';

import styles from './Heading.module.css';

export const Heading = ({ paragraphText, headingText }: HeadingTypes) => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.paragraph}>{paragraphText}</p>
			<h2 className={styles.header}>{headingText}</h2>
		</div>
	);
};
