import { LangSwitchBtnTypes } from './LangSwitchBtn.types';

import styles from './LangSwitchBtn.module.css';

export const LangSwitchBtn = ({ lang, setLang }: LangSwitchBtnTypes) => {
	return (
		<div className={styles.container}>
			<div onClick={() => setLang('pl')} className={`${styles.box} ${lang === 'pl' ? styles.active : ''}`}>
				PL
			</div>
			<div onClick={() => setLang('en')} className={`${styles.box} ${lang === 'en' ? styles.active : ''}`}>
				EN
			</div>
		</div>
	);
};
