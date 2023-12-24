'use client';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React from 'react';

function Providers({ children }: { children: React.ReactNode }) {
	const [client] = React.useState(new QueryClient());

	return (
		<QueryClientProvider client={client}>
			<ReactQueryStreamedHydration>
				<NextUIProvider>
					<NextThemesProvider attribute='class' defaultTheme='dark'>
						{children}
					</NextThemesProvider>
				</NextUIProvider>
			</ReactQueryStreamedHydration>
		</QueryClientProvider>
	);
}

export default Providers;
