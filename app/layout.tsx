import '../styles/globals.css';

import FONTS from '@/configurations/fonts';
import { METADATA } from '@/configurations/metadata';
import type { Metadata } from 'next';
import Providers from './providers';

export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='select-none no-scrollbar'>
			<body className={`${FONTS.alpha.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
