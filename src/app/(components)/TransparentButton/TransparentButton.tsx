import { TransparentButtonTypes } from './TransparentButton.types';

import styles from './TransparentButton.module.css';

export const TransparentButton = ({ text, width, height }: TransparentButtonTypes) => {
	return (
		<button className={styles.button} style={{ width, height }}>
			{text}
		</button>
	);
};
