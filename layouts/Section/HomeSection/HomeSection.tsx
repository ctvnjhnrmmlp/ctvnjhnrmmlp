import accounts from '@/data/accounts';
import { Chip } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { RiSparkling2Fill } from 'react-icons/ri';

function HomeSection() {
	return (
		<section className='w-screen'>
			<div className='flex flex-col gap-8 md:gap-12 lg:gap-16'>
				<div className='flex justify-center'>
					<Chip
						variant='bordered'
						size='lg'
						className='text-xs sm:text-sm md:text-lg border-1 px-1 py-2 sm:px-4 sm:py-5 font-extralight leading-none'
						startContent={
							<p className='mt-0.5 p-1'>
								<RiSparkling2Fill />
							</p>
						}
					>
						<span className='block leading-none mt-1'>
							1+ Year of Professional Working Experience
						</span>
					</Chip>
				</div>
				<div>
					<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-heading-one-large uppercase text-center leading-none'>
						John Rommel Octaviano
					</h1>
				</div>
				<div className='flex justify-center gap-6 md:gap-8'>
					{accounts.map((account) => {
						return (
							<Link
								key={account.url}
								href={account.url}
								target='_blank'
								className={`text-2xl md:text-4xl`}
							>
								<account.icon />
							</Link>
						);
					})}
				</div>
				<div>
					<Image
						className='rounded-xxl mx-auto w-11/12'
						width={100}
						height={100}
						src='/images/self-abstract.webp'
						alt='John Rommel Octaviano'
						unoptimized
					/>
				</div>
			</div>
		</section>
	);
}

export default HomeSection;
