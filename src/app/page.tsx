//layouts
import { Navbar } from './(layouts)/Navbar/Navbar';
import { Hero } from './(layouts)/Hero/Hero';
import { Countup } from './(layouts)/Countup/Countup';
import { Portfolio } from './(layouts)/Portfolio/Portfolio';
import { About } from './(layouts)/About/About';
import { Offer } from './(layouts)/Offer/Offer';
import { Brands } from './(layouts)/Brands/Brands';
//components
import { MainWrapper } from './(components)/MainWrapper/MainWrapper';
import { ContentWrapper } from './(components)/ContentWrapper/ContentWrapper';
import { Footer } from './(layouts)/Footer/Footer';

export default function Home() {
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
					<Portfolio />
				</ContentWrapper>
			</MainWrapper>
			<Footer />
		</main>
	);
}
