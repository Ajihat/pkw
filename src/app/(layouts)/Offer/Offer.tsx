'use client';
import { useState } from 'react';

import { Heading } from '@/app/(components)/Heading/Heading';
import { Plus } from '@/app/(components)/Plus/Plus';

import { OfferTypes } from './Offer.types';

import styles from './Offer.module.css';

const TEXTS = {
	HEADING: {
		pl: 'Oferujemy szeroki wachlarz produktów',
		en: 'We offer a wide range ofproducts',
	},
	HEADING_TEXT: {
		pl: 'W naszym katalogu znajdziesz:',
		en: 'In our catalog, you will find:',
	},
	OFFER1_HEADER: {
		pl: 'Agregaty Kogeneracyjne CHP',
		en: 'CHP Cogeneration Units',
	},
	OFFER1_SUBHEADER: {
		pl: 'wspólne wytwarzanie energii cieplnej i elektrycznej',
		en: 'Combined production of thermal and electrical energy',
	},
	OFFER1_TEXT: {
		pl: 'Nasza firma specjalizuje się w dostarczaniu nowoczesnych agregatów kogeneracyjnych CHP (Combined Heat and Power). Dzięki technologii wspólnego wytwarzania energii cieplnej i elektrycznej, nasze rozwiązania zapewniają efektywne i ekologiczne wykorzystanie zasobów energetycznych. Agregaty kogeneracyjne CHP pozwalają na jednoczesne wytwarzanie prądu oraz ciepła, co przekłada się na znaczące oszczędności oraz redukcję emisji szkodliwych substancji do atmosfery. Nasze urządzenia są idealnym rozwiązaniem zarówno dla przemysłu, jak i dla sektora komunalnego, zapewniając niezawodne i ekonomiczne źródło energii.',
		en: 'Our company offers innovative solutions in the field of micro biogas plants with an electrical capacity of up to 50 kW. Micro biogas plants are compact installations that enable the conversion of biomass into biogas, and subsequently into electrical and thermal energy. Thanks to our micro biogas plants, it is possible to efficiently utilize local organic resources, which helps reduce greenhouse gas emissions and lower energy costs. Our solutions are ideal for small farms, businesses, and local government units seeking ecological and cost-effective energy sources.',
	},
	OFFER2_HEADER: {
		pl: 'Mikrobiogazownia',
		en: 'Micro Biogas Plant',
	},
	OFFER2_SUBHEADER: {
		pl: 'do mocy elektrycznej do 50kW',
		en: 'For electrical power output up to 50 kW',
	},
	OFFER2_TEXT: {
		pl: 'Nasza firma oferuje innowacyjne rozwiązania w zakresie mikrobiogazowni o mocy elektrycznej do 50 kW. Mikrobiogazownie to kompaktowe instalacje, które umożliwiają przetwarzanie biomasy na biogaz, a następnie na energię elektryczną i cieplną. Dzięki naszym mikrobiogazowniom możliwe jest efektywne wykorzystanie lokalnych zasobów organicznych, co przyczynia się do zmniejszenia emisji gazów cieplarnianych oraz obniżenia kosztów energii. Nasze rozwiązania są idealne dla małych gospodarstw rolnych, przedsiębiorstw oraz jednostek samorządu terytorialnego, które poszukują ekologicznych i ekonomicznych źródeł energii.',
		en: 'Our company offers innovative solutions in the field of micro biogas plants with an electrical capacity of up to 50 kW. Micro biogas plants are compact installations that enable the conversion of biomass into biogas, and subsequently into electrical and thermal energy. Thanks to our micro biogas systems, it is possible to efficiently utilize local organic resources, which helps reduce greenhouse gas emissions and lower energy costs. Our solutions are ideal for small farms, businesses, and local government units seeking environmentally friendly and cost-effective energy sources.',
	},
	OFFER3_HEADER: {
		pl: 'Magazyny Energii Elektroenergetycznej',
		en: 'Electrical, Thermal, and Cooling Energy',
	},
	OFFER3_SUBHEADER: {
		pl: 'cieplnej i chłodniczej',
		en: 'Storage Systems',
	},
	OFFER3_TEXT: {
		pl: 'Nasza firma oferuje zaawansowane rozwiązania w zakresie magazynowania energii elektroenergetycznej, cieplnej i chłodniczej. Dzięki naszym nowoczesnym systemom magazynowania energii, możliwe jest efektywne zarządzanie zasobami energetycznymi, co przekłada się na zwiększenie niezawodności i stabilności dostaw energii. Nasze magazyny energii elektroenergetycznej pozwalają na gromadzenie nadwyżek energii elektrycznej, które mogą być wykorzystane w okresach zwiększonego zapotrzebowania. Magazyny energii cieplnej i chłodniczej umożliwiają przechowywanie ciepła i chłodu, co jest szczególnie przydatne w przemyśle oraz w budynkach użyteczności publicznej. Dzięki naszym rozwiązaniom, możliwe jest osiągnięcie znacznych oszczędności energetycznych oraz redukcja emisji szkodliwych substancji do atmosfery. Nasze systemy magazynowania energii są idealnym rozwiązaniem dla przedsiębiorstw, jednostek samorządu terytorialnego oraz innych podmiotów poszukujących efektywnych i ekologicznych sposobów zarządzania energią.',
		en: 'Our company offers advanced solutions for the storage of electrical, thermal, and cooling energy. With our modern energy storage systems, it is possible to efficiently manage energy resources, resulting in increased reliability and stability of energy supply. Our electrical energy storage systems allow for the accumulation of surplus electricity, which can be used during periods of higher demand. Thermal and cooling energy storage systems enable the storage of heat and cold, which is particularly useful in industry and public utility buildings. Thanks to our solutions, significant energy savings can be achieved, along with a reduction in harmful emissions into the atmosphere. Our energy storage systems are the perfect solution for businesses, local government units, and other entities seeking efficient and environmentally friendly methods of energy management.',
	},
	OFFER4_HEADER: {
		pl: 'Magazyny Wody Opadowej',
		en: 'Rainwater Storage Systems',
	},
	OFFER4_SUBHEADER: {
		pl: 'dla potrzeb przemysłu wraz ich uzdatnianiem do poziomu wody technicznej',
		en: 'Designed for industrial use, including treatment to technical water standards',
	},
	OFFER4_TEXT: {
		pl: 'Nasza firma oferuje nowoczesne rozwiązania w zakresie magazynowania wody opadowej dla potrzeb przemysłu, wraz z jej uzdatnianiem do poziomu wody technicznej. Dzięki naszym systemom możliwe jest efektywne gromadzenie i wykorzystanie wody deszczowej, co przyczynia się do oszczędności zasobów wodnych oraz redukcji kosztów operacyjnych. Nasze magazyny wody opadowej są zaprojektowane tak, aby zapewnić maksymalną wydajność i niezawodność. Proces uzdatniania wody obejmuje zaawansowane technologie filtracji i oczyszczania, które gwarantują, że uzyskana woda techniczna spełnia wszystkie wymagania jakościowe i jest odpowiednia do zastosowań przemysłowych. Dzięki naszym rozwiązaniom, przedsiębiorstwa mogą skutecznie zarządzać zasobami wodnymi, minimalizując wpływ na środowisko i zwiększając efektywność operacyjną. Nasze systemy magazynowania i uzdatniania wody opadowej są idealnym rozwiązaniem dla firm, które poszukują ekologicznych i ekonomicznych sposobów zarządzania wodą.',
		en: 'Our company offers modern solutions for rainwater storage for industrial applications, along with its treatment to the level of technical water. Thanks to our systems, it is possible to efficiently collect and utilize rainwater, contributing to the conservation of water resources and the reduction of operational costs. Our rainwater storage systems are designed to ensure maximum efficiency and reliability. The water treatment process includes advanced filtration and purification technologies that guarantee the produced technical water meets all quality requirements and is suitable for industrial use. With our solutions, companies can effectively manage water resources, minimize environmental impact, and improve operational efficiency. Our rainwater storage and treatment systems are the perfect solution for businesses seeking sustainable and cost-effective methods of water management.',
	},
	OFFER5_HEADER: {
		pl: 'System szybkiego ładowania',
		en: 'Fast Charging System',
	},
	OFFER5_SUBHEADER: {
		pl: 'do pojazdów elektrycznych',
		en: 'For electric vehicles',
	},
	OFFER5_TEXT: {
		pl: 'W naszej ofercie znajdziesz zaawansowane systemy szybkiego ładowania do pojazdów elektrycznych, które zapewniają szybkie i efektywne uzupełnianie energii w akumulatorach. Dzięki naszym rozwiązaniom, ładowanie pojazdów elektrycznych staje się wygodne i dostępne, co przyczynia się do popularyzacji ekologicznego transportu. Nasze systemy szybkiego ładowania są zaprojektowane z myślą o najwyższej wydajności i bezpieczeństwie. Wyposażone w nowoczesne technologie, umożliwiają szybkie ładowanie akumulatorów, co pozwala na skrócenie czasu postoju pojazdu i zwiększenie jego dostępności. Oferujemy różnorodne rozwiązania, które mogą być dostosowane do potrzeb zarówno prywatnych użytkowników, jak i przedsiębiorstw oraz instytucji publicznych. Dzięki naszym systemom szybkiego ładowania, możliwe jest efektywne zarządzanie energią oraz redukcja emisji szkodliwych substancji do atmosfery. Nasze rozwiązania są idealnym wyborem dla osób i firm, które poszukują nowoczesnych, ekologicznych i ekonomicznych sposobów ładowania pojazdów elektrycznych.',
		en: 'In our offer, you will find advanced fast-charging systems for electric vehicles that ensure quick and efficient battery energy replenishment. With our solutions, charging electric vehicles becomes convenient and accessible, contributing to the popularization of environmentally friendly transportation. Our fast-charging systems are designed with maximum performance and safety in mind. Equipped with modern technologies, they enable rapid battery charging, reducing vehicle downtime and increasing availability. We offer a variety of solutions that can be tailored to the needs of private users, businesses, and public institutions. Thanks to our fast-charging systems, effective energy management and a reduction in harmful emissions to the atmosphere are achievable. Our solutions are the ideal choice for individuals and companies seeking modern, eco-friendly, and cost-effective ways to charge electric vehicles.',
	},
};

export const Offer = ({ lang }: OfferTypes) => {
	const [openedOffers, setOpenedOffers] = useState<string[]>([]);

	const handleToggleOpen = (value: string) => {
		setOpenedOffers((prev) => {
			if (prev.includes(value)) {
				return prev.filter((item) => item !== value);
			} else {
				return [...prev, value];
			}
		});
	};
	return (
		<div className={styles.wrapper} id='offer'>
			<div className={styles.inner}>
				<Heading paragraphText={TEXTS.HEADING[lang]} headingText={TEXTS.HEADING_TEXT[lang]} />
				<div className={styles.holder}>
					<div className={styles.side}>
						<div className={styles.item}>
							<div className={styles.content}>
								<div className={styles.left}>
									<img src='/offer1.png' alt='Agregaty Kogeneracyjne Chp' className={styles.img} />
								</div>
								<div className={styles.right}>
									<h4 className={styles.heading}>{TEXTS.OFFER1_HEADER[lang]}</h4>
									<p className={styles.text}>{TEXTS.OFFER1_SUBHEADER[lang]}</p>
								</div>
							</div>
							{openedOffers.includes('offer1') && (
								<p className={styles.text}>{TEXTS.OFFER1_TEXT[lang]}</p>
							)}
							<Plus onClick={() => handleToggleOpen('offer1')} isOpen={openedOffers.includes('offer1')} />
						</div>
						<div className={styles.item}>
							<div className={styles.content}>
								<div className={styles.left}>
									<img src='/offer2.png' alt='Mikorbiogazownia' className={styles.img} />
								</div>
								<div className={styles.right}>
									<h4 className={styles.heading}>{TEXTS.OFFER2_HEADER[lang]}</h4>
									<p className={styles.text}>{TEXTS.OFFER2_SUBHEADER[lang]}</p>
								</div>
							</div>
							{openedOffers.includes('offer2') && (
								<p className={styles.text}>{TEXTS.OFFER2_TEXT[lang]}</p>
							)}
							<Plus onClick={() => handleToggleOpen('offer2')} isOpen={openedOffers.includes('offer2')} />
						</div>
						<div className={styles.item}>
							<div className={styles.content}>
								<div className={styles.left}>
									<img
										src='/offer3.png'
										alt='Magazyny Energii Elektroenergetycznej'
										className={styles.img}
									/>
								</div>
								<div className={styles.right}>
									<h4 className={styles.heading}>{TEXTS.OFFER3_HEADER[lang]}</h4>
									<p className={styles.text}>{TEXTS.OFFER3_SUBHEADER[lang]}</p>
								</div>
							</div>
							{openedOffers.includes('offer3') && (
								<p className={styles.text}>{TEXTS.OFFER3_TEXT[lang]}</p>
							)}
							<Plus onClick={() => handleToggleOpen('offer3')} isOpen={openedOffers.includes('offer3')} />
						</div>
					</div>
					<div className={styles.side}>
						<div className={styles.item}>
							<div className={styles.content}>
								<div className={styles.left}>
									<img src='/offer4.png' alt='Magazyny Wody Opadowej' className={styles.img} />
								</div>
								<div className={styles.right}>
									<h4 className={styles.heading}>{TEXTS.OFFER4_HEADER[lang]}</h4>
									<p className={styles.text}>{TEXTS.OFFER4_SUBHEADER[lang]}</p>
								</div>
							</div>
							{openedOffers.includes('offer4') && (
								<p className={styles.text}>{TEXTS.OFFER4_TEXT[lang]}</p>
							)}
							<Plus onClick={() => handleToggleOpen('offer4')} isOpen={openedOffers.includes('offer4')} />
						</div>
						<div className={styles.item}>
							<div className={styles.content}>
								<div className={styles.left}>
									<img src='/offer5.png' alt='System szybkiego ładowania' className={styles.img} />
								</div>
								<div className={styles.right}>
									<h4 className={styles.heading}>{TEXTS.OFFER5_HEADER[lang]}</h4>
									<p className={styles.text}>{TEXTS.OFFER5_SUBHEADER[lang]}</p>
								</div>
							</div>
							{openedOffers.includes('offer5') && (
								<p className={styles.text}>{TEXTS.OFFER5_TEXT[lang]}</p>
							)}
							<Plus onClick={() => handleToggleOpen('offer5')} isOpen={openedOffers.includes('offer5')} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
