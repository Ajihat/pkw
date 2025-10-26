import { Dispatch, SetStateAction } from 'react';

export interface LangSwitchBtnTypes {
	lang: 'pl' | 'en';
	setLang: Dispatch<SetStateAction<'pl' | 'en'>>;
}
