'use client';

import accounts from '@/data/accounts';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

function Footer() {
	return (
		<footer id='accounts' className='py-24'>
			<div className='flex flex-col gap-24'>
				<div className='flex flex-col lg:flex-row gap-10 justify-center mx-auto'>
					{accounts.map((account) => (
						<Button
							key={account.name}
							as={Link}
							href={account.url}
							target='_blank'
							variant='bordered'
							radius='full'
							className='text-2xl p-8 lg:p-6 border-1 dark:border-[#3F3F46] font-extrabold'
						>
							{account.name}
						</Button>
					))}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
