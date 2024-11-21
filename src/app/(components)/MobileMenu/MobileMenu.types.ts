import { Dispatch, SetStateAction } from 'react';

export interface MobileMenuTypes {
	isMenuOpen: boolean;
	setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}
