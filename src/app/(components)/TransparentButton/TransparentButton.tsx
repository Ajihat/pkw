import { TransparentButtonTypes } from './TransparentButton.types';

import styles from './TransparentButton.module.css';

export const TransparentButton = ({ text, width, height, onClick }: TransparentButtonTypes) => {
	return (
		<button onClick={onClick} className={styles.button} style={{ width, height }}>
			{text}
		</button>
	);
};
