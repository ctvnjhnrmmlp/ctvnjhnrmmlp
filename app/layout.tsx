import Footer from '@/layouts/Footer/Footer';
import Nav from '@/layouts/Nav/Nav';
import { ScrollShadow } from '@nextui-org/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://ctvnjhnrmmlp.vercel.app'),
	title: 'John Rommel Octaviano',
	description:
		'Software Engineer. Web3 Developer. UI/UX Designer. Technical Blogger.',
	applicationName: 'ctvnjhnrmmlp',
	generator: 'typescript, react, nextjs, tailwindcss',
	keywords:
		'john rommel octaviano, ctvnjhnrmmlp, software engineer, web3 developer, ui/ux designer, technical blogger',
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
	manifest: '/documents/manifest.txt',
	openGraph: {
		type: 'website',
		url: 'https://ctvnjhnrmmlp.vercel.app',
		title: 'John Rommel Octaviano',
		description:
			'Software Engineer. Web3 Developer. UI/UX Designer. Technical Blogger.',
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
		description:
			'Software Engineer. Web3 Developer. UI/UX Designer. Technical Blogger.',
		title: 'John Rommel Octaviano',
		images: [
			{
				url: '/images/self-abstract.webp',
			},
		],
	},
	verification: {
		google: '',
		yandex: '',
		me: '',
	},
	appleWebApp: {
		capable: true,
		title: 'John Rommel Octaviano',
		statusBarStyle: 'black-translucent',
	},
	formatDetection: {
		telephone: false,
	},
	itunes: {
		appId: '',
		appArgument: '',
	},
	abstract:
		'Software Engineer. Web3 Developer. UI/UX Designer. Technical Blogger.',
	appLinks: {},
	category:
		'software engineer, web3 developer, ui/ux designer, technical blogger',
	classification:
		'software engineer, web3 developer, ui/ux designer, technical blogger',
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
