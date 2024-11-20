import styles from './WhiteButton.module.css';

import { WhiteButtonTypes } from './WhiteButton.types';

export const WhiteButton = ({ width, height, text }: WhiteButtonTypes) => {
	return (
		<button className={styles.button} style={{ width, height }}>
			{text}
		</button>
	);
};
