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
	title: 'Create Next App',
	description: 'Generated by create next app',
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
