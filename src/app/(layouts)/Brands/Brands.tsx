'use client';
import { Heading } from '@/app/(components)/Heading/Heading';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { brandsData } from '@/app/(data)/brandsData';

import styles from './Brands.module.css';

export const Brands = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,

		responsive: [
			{
				breakpoint: 1200, // Dla urządzeń o szerokości poniżej 768px
				settings: {
					slidesToShow: 4, // Pokaż 1 element na mniejszych ekranach
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 850, // Dla urządzeń o szerokości poniżej 768px
				settings: {
					slidesToShow: 3, // Pokaż 1 element na mniejszych ekranach
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 390, // Dla urządzeń o szerokości poniżej 768px
				settings: {
					slidesToShow: 2, // Pokaż 1 element na mniejszych ekranach
					slidesToScroll: 2,
				},
			},
		],
	};
	return (
		<div className={styles.sliderContainer}>
			<Heading
				paragraphText='Stawiamy na partnerskie relacje'
				headingText='Zaufanie i klarowne zasady współpracy'
			/>
			<div className={styles.inner}>
				<Slider {...settings} className='brandsSlider'>
					{brandsData.map((item) => {
						return (
							<div key={item.id} className='item'>
								<img src={item.imageSrc} alt={item.alt} className='image' />
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};
