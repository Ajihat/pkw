'use client';
import { useState, useEffect } from 'react';

//layouts
import { Navbar } from './(layouts)/Navbar/Navbar';
import { Hero } from './(layouts)/Hero/Hero';
import { Countup } from './(layouts)/Countup/Countup';
// import { Portfolio } from './(layouts)/Portfolio/Portfolio';
import { About } from './(layouts)/About/About';
import { Offer } from './(layouts)/Offer/Offer';
import { Brands } from './(layouts)/Brands/Brands';
import { News } from './(layouts)/News/News';
//components
import { MainWrapper } from './(components)/MainWrapper/MainWrapper';
import { ContentWrapper } from './(components)/ContentWrapper/ContentWrapper';
import { Footer } from './(layouts)/Footer/Footer';
import { Popup } from './(components)/Popup/Popup';

import { PopupData } from './(components)/Popup/Popup.types';

export default function Home() {
	const [popupData, setPopupData] = useState<null | PopupData>(null);
	const [lang, setLang] = useState<'pl' | 'en'>('pl');

	useEffect(() => {
		try {
			const userLang = navigator.language || navigator.languages[0];
			const language = userLang.split('-')[0];
			if (language === 'pl') {
				setLang('pl');
			} else {
				setLang('en');
			}
		} catch {
			setLang('pl');
		}
	}, []);

	return (
		<main>
			<Navbar lang={lang} setLang={setLang} />
			<MainWrapper>
				<ContentWrapper>
					<Hero lang={lang} />
					<Brands lang={lang} />
					<Countup lang={lang} />
					<About lang={lang} />
					<Offer lang={lang} />
					{/* <Portfolio /> */}
					<News setPopupData={setPopupData} lang={lang} />
				</ContentWrapper>
			</MainWrapper>
			<Popup popupData={popupData} setPopupData={setPopupData} />
			<Footer lang={lang} />
		</main>
	);
}
