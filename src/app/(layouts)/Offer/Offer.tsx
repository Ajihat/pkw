import Image from 'next/image';

import { Heading } from '@/app/(components)/Heading/Heading';
import { Plus } from '@/app/(components)/Plus/Plus';

import styles from './Offer.module.css';

export const Offer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner}>
				<Heading
					paragraphText='Oferujemy szeroki wachlarz produktów.'
					headingText='W naszym katalogu znajdziesz:'
				/>
				<div className={styles.holder}>
					<div className={styles.item}>
						<div className={styles.left}>
							<Image src='./offer1.svg' fill alt='Agregaty Kogeneracyjne Chp' className={styles.img} />
						</div>
						<div className={styles.right}>
							<h4 className={styles.heading}>Agregaty Kogeneracyjne Chp</h4>
							<p className={styles.text}>kogeneracja energii cieplnej i elektrycznej</p>
						</div>
						<Plus />
					</div>
					<div className={styles.item}>
						<div className={styles.left}>
							<Image src='./offer2.svg' fill alt='Mikorbiogazownia' className={styles.img} />
						</div>
						<div className={styles.right}>
							<h4 className={styles.heading}>Mikrobiogazownia</h4>
							<p className={styles.text}>do mocy elektrycznej do 50kW</p>
						</div>
						<Plus />
					</div>
					<div className={styles.item}>
						<div className={styles.left}>
							<Image
								src='./offer3.svg'
								fill
								alt='Magazyny Energii Elektroenergetycznej'
								className={styles.img}
							/>
						</div>
						<div className={styles.right}>
							<h4 className={styles.heading}>Magazyny Energii Elektroenergetycznej</h4>
							<p className={styles.text}>Cieplnej i chłodniczej</p>
						</div>
						<Plus />
					</div>
					<div className={styles.item}>
						<div className={styles.left}>
							<Image src='./offer4.svg' fill alt='Magazyny Wody Opadowej' className={styles.img} />
						</div>
						<div className={styles.right}>
							<h4 className={styles.heading}>Magazyny Wody Opadowej</h4>
							<p className={styles.text}>
								dla potrzeb przemysłu wraz ich uzdatnianiem do poziomu wody technicznej
							</p>
						</div>
						<Plus />
					</div>
				</div>
			</div>
		</div>
	);
};