import { Dispatch, SetStateAction } from 'react';

import { PopupData } from '@/app/(components)/Popup/Popup.types';

export interface NewsTypes {
	setPopupData: Dispatch<SetStateAction<null | PopupData>>;
}
