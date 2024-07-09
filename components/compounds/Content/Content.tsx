'use client';

import Splash from '@/components/compounds/Splash/Splash';
import React from 'react';

function Content({ children }: { children: React.ReactNode }) {
	const [loading, setLoading] = React.useState(true);

	return (
		<>
			{loading && <Splash finishLoading={() => setLoading(false)} />}

			{!loading && <>{children}</>}
		</>
	);
}

export default Content;
