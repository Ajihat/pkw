import styles from './WhiteButton.module.css';

import { WhiteButtonTypes } from './WhiteButton.types';

export const WhiteButton = ({ width, height, text, onClick }: WhiteButtonTypes) => {
	return (
		<button onClick={onClick} className={styles.button} style={{ width, height }}>
			{text}
		</button>
	);
};
