import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sav Sidorov',
	description: 'My personal website',
	image: '/images/preview.png', //FIXME: Get og:image working
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<img src="/images/preview.png" alt="" style={{ display: 'none' }} />
				<meta
					property="og:image"
					content="https://framerusercontent.com/modules/nLAQZ2Yplrkz8T67HJuY/kzY2wHLMF7ZyW0mPA2xa/assets/KoQVztJdqhtxsT7kQmIfK0AT5nk.jpg"
				/>
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
