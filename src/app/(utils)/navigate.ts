import { Dispatch, SetStateAction } from 'react';

export function scrollToDiv(divId: string, setIsMenuOpen?: Dispatch<SetStateAction<boolean>>): void {
	const targetElement = document.getElementById(divId);

	if (targetElement) {
		targetElement.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
		if (setIsMenuOpen) {
			setIsMenuOpen(false);
		}
	} else {
		console.warn(`Element o ID "${divId}" nie został znaleziony.`);
	}
}
