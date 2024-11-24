'use client';
import { Heading } from '@/app/(components)/Heading/Heading';
import { Plus } from '@/app/(components)/Plus/Plus';

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
				breakpoint: 800, // Dla urządzeń o szerokości poniżej 768px
				settings: {
					slidesToShow: 1, // Pokaż 1 element na mniejszych ekranach
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className={styles.sliderContainer} id='portfolio'>
			<Heading paragraphText='Portfolio' headingText='Portfolio' />
			<Slider {...settings} className='newsSlider'>
				{portfolioData.map((item) => {
					return (
						<div key={item.id} className='item'>
							<div
								className='img'
								style={{
									backgroundImage: `url(${item.imageSrc})`,
								}}
							></div>
							<div className='content'>
								<p className='text'>{item.date}</p>
								<h3 className='details'>{item.header}</h3>
							</div>
							<Plus />
						</div>
					);
				})}
			</Slider>
		</div>
	);
};
