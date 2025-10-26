import { Dispatch, SetStateAction } from 'react';

export interface NavbarTypes {
	lang: 'pl' | 'en';
	setLang: Dispatch<SetStateAction<'pl' | 'en'>>;
}
