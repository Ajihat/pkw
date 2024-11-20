'use client';
import { Heading } from '@/app/(components)/Heading/Heading';

import { portfolioData } from '@/app/(data)/portfolioData';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Portfilio.module.css';

// Definiowanie rozmiarów ekranów, aby wyświetlać 2 elementy
export const Portfolio = () => {
	// Własne komponenty przycisków

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,

		responsive: [
			{
				breakpoint: 768, // Dla urządzeń o szerokości poniżej 768px
				settings: {
					slidesToShow: 1, // Pokaż 1 element na mniejszych ekranach
				},
			},
		],
	};
	return (
		<div className={styles.sliderContainer}>
			<Heading paragraphText='Portfolio' headingText='Portfolio' />
			<Slider {...settings} className='portfolioSlider'>
				{portfolioData.map((item) => {
					return (
						<div key={item.id} className='item'>
							<div
								className='img'
								style={{
									backgroundImage: `url(${item.imageSrc})`,
								}}
							></div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};
