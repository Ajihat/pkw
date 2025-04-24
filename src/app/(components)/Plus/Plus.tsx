import { HiPlus, HiMinus } from 'react-icons/hi';

import styles from './Plus.module.css';

import { PlusTypes } from './Plus.types';

export const Plus = ({ isOpen, onClick }: PlusTypes) => {
	return (
		<div onClick={onClick} className={styles.wrapper}>
			{isOpen ? (
				<HiMinus size={30} style={{ color: 'white' }} />
			) : (
				<HiPlus size={30} style={{ color: 'white' }} />
			)}
		</div>
	);
};
