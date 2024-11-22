'use client';
import { Heading } from '@/app/(components)/Heading/Heading';

import { newsData } from '@/app/(data)/newsData';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './News.module.css';

// Definiowanie rozmiarów ekranów, aby wyświetlać 2 elementy
export const News = () => {
	// Własne komponenty przycisków

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,

		responsive: [
			{
				breakpoint: 1400, // Dla urządzeń o szerokości poniżej 768px
				settings: {
					slidesToShow: 3, // Pokaż 1 element na mniejszych ekranach
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 1024, // Dla urządzeń o szerokości poniżej 768px
				settings: {
					slidesToShow: 2, // Pokaż 1 element na mniejszych ekranach
					slidesToScroll: 2,
				},
			},
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
		<div className={styles.sliderContainer} id='news'>
			<Heading paragraphText='Nasze ostatnie realizacje' headingText='Aktualności' />
			<Slider {...settings} className='portfolioSlider'>
				{newsData.map((item) => {
					return (
						<div key={item.id} className='item'>
							<div
								className='img'
								style={{
									backgroundImage: `url(${item.imageSrc})`,
								}}
							></div>
							<div className='content'>
								<p className='text'>{item.header}</p>
								<h3 className='details'>{item.subHeader}</h3>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};
