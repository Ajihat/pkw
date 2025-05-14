import type { Metadata } from 'next';
import { headers } from 'next/headers';
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

export async function generateMetadata(): Promise<Metadata> {
	const headersList = await headers();
	const host = headersList.get('host');
	const protocol = host?.includes('localhost') ? 'http' : 'https';
	const baseUrl = `${protocol}://${host}`;

	return {
		title: 'PKW Engineering - Zaawansowane Technologie Przemysłowe',
		description: 'Profesjonalne i innowacyjne rozwiązania technologiczne dla przemysłu.',
		openGraph: {
			title: 'PKW Engineering - Zaawansowane Technologie Przemysłowe',
			description: 'Profesjonalne i innowacyjne rozwiązania technologiczne dla przemysłu.',
			url: baseUrl,
			type: 'website',
			images: [
				{
					url: `${baseUrl}/og-image.jpg`,
					width: 1200,
					height: 630,
					alt: 'PKW Engineering - Zaawansowane Technologie Przemysłowe',
				},
			],
			locale: 'pl_PL',
			siteName: 'PKW Engineering',
		},
		alternates: {
			canonical: baseUrl,
		},
	};
}

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
