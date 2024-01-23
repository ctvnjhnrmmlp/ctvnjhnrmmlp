import './globals.css';

import professions from '@/sources/professions';
import Footer from '@/layouts/Footer/Footer';
import Nav from '@/layouts/Nav/Nav';
import getJoinedStringComma from '@/utilities/getJoinedStringComma';
import getJoinedStringPeriod from '@/utilities/getJoinedStringPeriod';
import { ScrollShadow } from '@nextui-org/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://ctvnjhnrmmlp.vercel.app'),
	title: 'John Rommel Octaviano',
	description: getJoinedStringPeriod(professions),
	applicationName: 'ctvnjhnrmmlp',
	generator: 'typescript, react, nextjs, tailwindcss',
	keywords: `john rommel octaviano, ctvnjhnrmmlp, ${getJoinedStringComma(
		professions
	).toLowerCase()}`,
	referrer: 'origin',
	themeColor: 'dark',
	colorScheme: 'dark',
	creator: 'John Rommel Octaviano',
	publisher: 'John Rommel Octaviano',
	robots: 'index, follow',
	alternates: {
		canonical: 'https://ctvnjhnrmmlp.vercel.app',
	},
	icons: '/images/self-logo.svg',
	openGraph: {
		type: 'website',
		url: 'https://ctvnjhnrmmlp.vercel.app',
		title: 'John Rommel Octaviano',
		description: getJoinedStringPeriod(professions),
		siteName: 'ctvnjhnrmmlp',
		images: [
			{
				url: '/images/self-abstract.webp',
			},
		],
	},
	twitter: {
		site: 'ctvnjhnrmmlp',
		siteId: '',
		creator: 'John Rommel Octaviano',
		creatorId: '',
		description: getJoinedStringPeriod(professions),
		title: 'John Rommel Octaviano',
		images: [
			{
				url: '/images/self-abstract.webp',
			},
		],
	},
	appleWebApp: {
		capable: true,
		title: 'John Rommel Octaviano',
		statusBarStyle: 'black-translucent',
	},
	formatDetection: {
		telephone: false,
	},
	abstract: getJoinedStringPeriod(professions),
	category: `${getJoinedStringComma(professions).toLowerCase()}`,
	classification: `${getJoinedStringComma(professions).toLowerCase()}`,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='select-none duration-1000'>
			<body className={`${inter.className} relative no-scrollbar`}>
				<Providers>
					<ScrollShadow className='w-screen h-screen' hideScrollBar>
						<Nav />
						{children}
						<Footer />
					</ScrollShadow>
				</Providers>
			</body>
		</html>
	);
}
