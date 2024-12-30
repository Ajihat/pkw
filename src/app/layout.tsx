import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'], // Wybierz odpowiednie subsety, np. latin
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
});

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-roboto',
});

export const metadata: Metadata = {
	title: 'PKW Engineering - Zaawansowane Technologie Przemysłowe',
	description:
		'Profesjonalne i innowacyjne rozwiązania technologiczne dla przemysłu. Specjalizujemy się w zarządzaniu obiegiem wody i energii, wspierając zrównoważony rozwój.',
	keywords: [
		'zaawansowane technologie przemysłowe',
		'zarządzanie obiegiem wody',
		'zarządzanie energią',
		'agregaty kogeneracyjne',
		'mikrobiogazownie',
		'magazyny energii',
		'odnawialne źródła energii',
		'zrównoważony rozwój',
		'ochrona środowiska',
		'innowacyjne rozwiązania technologiczne',
	],
	openGraph: {
		title: 'PKW Engineering - Zaawansowane Technologie Przemysłowe',
		description:
			'Profesjonalne i innowacyjne rozwiązania technologiczne dla przemysłu. Specjalizujemy się w zarządzaniu obiegiem wody i energii, wspierając zrównoważony rozwój.',
		url: 'https://pkw.vercel.app/', //zmienic
		type: 'website',
		images: [
			{
				url: 'https://pkw.vercel.app/og-image.jpg', //zmienic
				width: 1200,
				height: 630,
				alt: 'PKW Engineering - Zaawansowane Technologie Przemysłowe',
			},
		],
		locale: 'pl_PL',
		siteName: 'PKW Engineering',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} ${roboto.variable}`}>{children}</body>
		</html>
	);
}
