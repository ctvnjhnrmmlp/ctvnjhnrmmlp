'use client';

import Splash from '@/components/compounds/Splash/Splash';
import React from 'react';

function Loading() {
	const [loading, setLoading] = React.useState(true);

	return (
		<section className='flex flex-col gap-6 px-4'>
			{loading && <Splash finishLoading={() => setLoading(false)} />}
		</section>
	);
}

export default Loading;
