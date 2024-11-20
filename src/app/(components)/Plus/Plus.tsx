import { HiPlus } from 'react-icons/hi';

import styles from './Plus.module.css';

export const Plus = () => {
	return (
		<div className={styles.wrapper}>
			<HiPlus size={30} style={{ color: 'white' }} />
		</div>
	);
};
