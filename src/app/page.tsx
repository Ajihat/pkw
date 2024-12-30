'use client';
import { useState } from 'react';

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
	return (
		<main>
			<Navbar />
			<MainWrapper>
				<ContentWrapper>
					<Hero />
					<Brands />
					<Countup />
					<About />
					<Offer />
					{/* <Portfolio /> */}
					<News setPopupData={setPopupData} />
				</ContentWrapper>
			</MainWrapper>
			<Popup popupData={popupData} setPopupData={setPopupData} />
			<Footer />
		</main>
	);
}
