import { RiCloseLargeFill } from 'react-icons/ri';

import styles from './Popup.module.css';

import { PopupTypes } from './Popup.types';

export const Popup = ({ popupData, setPopupData }: PopupTypes) => {
	if (!popupData) return null;
	return (
		<div className={styles.holder}>
			<div onClick={() => setPopupData(null)} className={styles.layer}></div>
			<div className={styles.inner}>
				<div
					className={styles.img}
					style={{
						backgroundImage: `url(${popupData.imageSrc})`,
					}}
				></div>
				<div className='content'>
					<h2 className='mainHeader'>{popupData.header}</h2>
					<div dangerouslySetInnerHTML={{ __html: popupData.content }}></div>
				</div>
				<div onClick={() => setPopupData(null)} className={styles.close}>
					<RiCloseLargeFill color='black' size={23} />
				</div>
			</div>
		</div>
	);
};
