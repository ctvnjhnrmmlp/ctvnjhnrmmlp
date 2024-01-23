import technologies from '@/sources/technologies';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';

function TechnologySection() {
	return (
		<section
			id='technologies'
			className='flex flex-col justify-center gap-40 min-h-screen w-screen md:w-full'
		>
			<div className='flex flex-col gap-32'>
				<div className='space-y-12'>
					<div className='flex justify-center'>
						<Chip
							variant='bordered'
							size='lg'
							className='text-2xl xs:text-4xl border-1 p-7 xs:p-9 font-extralight leading-none'
						>
							<span className='block leading-none mt-1'>
								Main Specilizations
							</span>
						</Chip>
					</div>
					<div className='flex flex-wrap gap-10 justify-center p-3'>
						{technologies
							.filter((technology) => technology.main)
							.map((technology) => (
								<Link
									key={technology.url}
									href={technology.url}
									target='_blank'
									className='text-6xl sm:text-7xl block'
								>
									<technology.icon />
								</Link>
							))}
					</div>
				</div>

				<div className='space-y-12'>
					<div className='flex justify-center'>
						<Chip
							variant='bordered'
							size='lg'
							className='text-2xl xs:text-4xl border-1 p-7 xs:p-9 font-extralight leading-none'
						>
							<span className='block leading-none mt-1'>
								Background Technologies
							</span>
						</Chip>
					</div>
					<div className='flex flex-wrap gap-8 justify-center p-3'>
						{technologies
							.filter((technology) => !technology.main)
							.map((technology) => (
								<Link
									key={technology.url}
									href={technology.url}
									target='_blank'
									className='text-5xl block'
								>
									<technology.icon />
								</Link>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default TechnologySection;
