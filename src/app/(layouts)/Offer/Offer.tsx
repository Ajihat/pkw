'use client';
import { useState } from 'react';

import { Heading } from '@/app/(components)/Heading/Heading';
import { Plus } from '@/app/(components)/Plus/Plus';

import styles from './Offer.module.css';

export const Offer = () => {
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
				<Heading
					paragraphText='Oferujemy szeroki wachlarz produktów.'
					headingText='W naszym katalogu znajdziesz:'
				/>
				<div className={styles.holder}>
					<div className={styles.side}>
						<div className={styles.item}>
							<div className={styles.content}>
								<div className={styles.left}>
									<img src='/offer1.png' alt='Agregaty Kogeneracyjne Chp' className={styles.img} />
								</div>
								<div className={styles.right}>
									<h4 className={styles.heading}>Agregaty Kogeneracyjne CHP</h4>
									<p className={styles.text}>wspólne wytwarzanie energii cieplnej i elektrycznej</p>
								</div>
							</div>
							{openedOffers.includes('offer1') && (
								<p className={styles.text}>
									Nasza firma specjalizuje się w dostarczaniu nowoczesnych agregatów kogeneracyjnych
									CHP (Combined Heat and Power). Dzięki technologii wspólnego wytwarzania energii
									cieplnej i elektrycznej, nasze rozwiązania zapewniają efektywne i ekologiczne
									wykorzystanie zasobów energetycznych. Agregaty kogeneracyjne CHP pozwalają na
									jednoczesne wytwarzanie prądu oraz ciepła, co przekłada się na znaczące oszczędności
									oraz redukcję emisji szkodliwych substancji do atmosfery. Nasze urządzenia są
									idealnym rozwiązaniem zarówno dla przemysłu, jak i dla sektora komunalnego,
									zapewniając niezawodne i ekonomiczne źródło energii.
								</p>
							)}
							<Plus onClick={() => handleToggleOpen('offer1')} isOpen={openedOffers.includes('offer1')} />
						</div>
						<div className={styles.item}>
							<div className={styles.content}>
								<div className={styles.left}>
									<img src='/offer2.png' alt='Mikorbiogazownia' className={styles.img} />
								</div>
								<div className={styles.right}>
									<h4 className={styles.heading}>Mikrobiogazownia</h4>
									<p className={styles.text}>do mocy elektrycznej do 50kW</p>
								</div>
							</div>
							{openedOffers.includes('offer2') && (
								<p className={styles.text}>
									Nasza firma oferuje innowacyjne rozwiązania w zakresie mikrobiogazowni o mocy
									elektrycznej do 50 kW. Mikrobiogazownie to kompaktowe instalacje, które umożliwiają
									przetwarzanie biomasy na biogaz, a następnie na energię elektryczną i cieplną.
									Dzięki naszym mikrobiogazowniom możliwe jest efektywne wykorzystanie lokalnych
									zasobów organicznych, co przyczynia się do zmniejszenia emisji gazów cieplarnianych
									oraz obniżenia kosztów energii. Nasze rozwiązania są idealne dla małych gospodarstw
									rolnych, przedsiębiorstw oraz jednostek samorządu terytorialnego, które poszukują
									ekologicznych i ekonomicznych źródeł energii.
								</p>
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
									<h4 className={styles.heading}>Magazyny Energii Elektroenergetycznej</h4>
									<p className={styles.text}>cieplnej i chłodniczej</p>
								</div>
							</div>
							{openedOffers.includes('offer3') && (
								<p className={styles.text}>
									Nasza firma oferuje zaawansowane rozwiązania w zakresie magazynowania energii
									elektroenergetycznej, cieplnej i chłodniczej. Dzięki naszym nowoczesnym systemom
									magazynowania energii, możliwe jest efektywne zarządzanie zasobami energetycznymi,
									co przekłada się na zwiększenie niezawodności i stabilności dostaw energii. Nasze
									magazyny energii elektroenergetycznej pozwalają na gromadzenie nadwyżek energii
									elektrycznej, które mogą być wykorzystane w okresach zwiększonego zapotrzebowania.
									Magazyny energii cieplnej i chłodniczej umożliwiają przechowywanie ciepła i chłodu,
									co jest szczególnie przydatne w przemyśle oraz w budynkach użyteczności publicznej.
									Dzięki naszym rozwiązaniom, możliwe jest osiągnięcie znacznych oszczędności
									energetycznych oraz redukcja emisji szkodliwych substancji do atmosfery. Nasze
									systemy magazynowania energii są idealnym rozwiązaniem dla przedsiębiorstw,
									jednostek samorządu terytorialnego oraz innych podmiotów poszukujących efektywnych i
									ekologicznych sposobów zarządzania energią.
								</p>
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
									<h4 className={styles.heading}>Magazyny Wody Opadowej</h4>
									<p className={styles.text}>
										dla potrzeb przemysłu wraz ich uzdatnianiem do poziomu wody technicznej
									</p>
								</div>
							</div>
							{openedOffers.includes('offer4') && (
								<p className={styles.text}>
									Nasza firma oferuje nowoczesne rozwiązania w zakresie magazynowania wody opadowej
									dla potrzeb przemysłu, wraz z jej uzdatnianiem do poziomu wody technicznej. Dzięki
									naszym systemom możliwe jest efektywne gromadzenie i wykorzystanie wody deszczowej,
									co przyczynia się do oszczędności zasobów wodnych oraz redukcji kosztów
									operacyjnych. Nasze magazyny wody opadowej są zaprojektowane tak, aby zapewnić
									maksymalną wydajność i niezawodność. Proces uzdatniania wody obejmuje zaawansowane
									technologie filtracji i oczyszczania, które gwarantują, że uzyskana woda techniczna
									spełnia wszystkie wymagania jakościowe i jest odpowiednia do zastosowań
									przemysłowych. Dzięki naszym rozwiązaniom, przedsiębiorstwa mogą skutecznie
									zarządzać zasobami wodnymi, minimalizując wpływ na środowisko i zwiększając
									efektywność operacyjną. Nasze systemy magazynowania i uzdatniania wody opadowej są
									idealnym rozwiązaniem dla firm, które poszukują ekologicznych i ekonomicznych
									sposobów zarządzania wodą.
								</p>
							)}
							<Plus onClick={() => handleToggleOpen('offer4')} isOpen={openedOffers.includes('offer4')} />
						</div>
						<div className={styles.item}>
							<div className={styles.content}>
								<div className={styles.left}>
									<img src='/offer5.png' alt='System szybkiego ładowania' className={styles.img} />
								</div>
								<div className={styles.right}>
									<h4 className={styles.heading}>System szybkiego ładowania</h4>
									<p className={styles.text}>do pojazdów elektrycznych</p>
								</div>
							</div>
							{openedOffers.includes('offer5') && (
								<p className={styles.text}>
									W naszej ofercie znajdziesz zaawansowane systemy szybkiego ładowania do pojazdów
									elektrycznych, które zapewniają szybkie i efektywne uzupełnianie energii w
									akumulatorach. Dzięki naszym rozwiązaniom, ładowanie pojazdów elektrycznych staje
									się wygodne i dostępne, co przyczynia się do popularyzacji ekologicznego transportu.
									Nasze systemy szybkiego ładowania są zaprojektowane z myślą o najwyższej wydajności
									i bezpieczeństwie. Wyposażone w nowoczesne technologie, umożliwiają szybkie
									ładowanie akumulatorów, co pozwala na skrócenie czasu postoju pojazdu i zwiększenie
									jego dostępności. Oferujemy różnorodne rozwiązania, które mogą być dostosowane do
									potrzeb zarówno prywatnych użytkowników, jak i przedsiębiorstw oraz instytucji
									publicznych. Dzięki naszym systemom szybkiego ładowania, możliwe jest efektywne
									zarządzanie energią oraz redukcja emisji szkodliwych substancji do atmosfery. Nasze
									rozwiązania są idealnym wyborem dla osób i firm, które poszukują nowoczesnych,
									ekologicznych i ekonomicznych sposobów ładowania pojazdów elektrycznych.
								</p>
							)}
							<Plus onClick={() => handleToggleOpen('offer5')} isOpen={openedOffers.includes('offer5')} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
