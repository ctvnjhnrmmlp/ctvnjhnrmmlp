'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<section className='flex flex-col items-center justify-center w-screen min-h-screen'>
			<div className='flex flex-col gap-16'>
				<div className='flex justify-center'>
					<Button
						as={Link}
						href='/'
						variant='bordered'
						radius='full'
						className='text-2xl p-8 border-1 dark:border-[#3F3F46] font-extrabold'
						startContent={
							<p className='pr-1'>
								<IoIosArrowBack />
							</p>
						}
					>
						Go Back Home
					</Button>
				</div>
				<div className='flex flex-col'>
					<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-heading-one-large uppercase text-center leading-none'>
						ERROR
					</h1>
				</div>
			</div>
		</section>
	);
}

export default GlobalError;
