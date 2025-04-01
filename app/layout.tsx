import Content from '@/components/compounds/Content/Content';
import FONTS from '@/configurations/fonts';
import { METADATA } from '@/configurations/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='select-none no-scrollbar'>
      <body className={`${FONTS.alpha.className}`}>
        <Content>{children}</Content>
      </body>
    </html>
  );
}
