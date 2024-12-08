import { Dispatch, SetStateAction } from 'react';

export type PopupData = {
	imageSrc: string;
	header: string;
	content: string;
};

export interface PopupTypes {
	popupData: null | PopupData;
	setPopupData: Dispatch<SetStateAction<null | PopupData>>;
}
