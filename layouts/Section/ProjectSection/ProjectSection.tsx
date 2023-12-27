import ApplicationSwiper from '@/components/Swiper/ApplicationSwiper/ApplicationSwiper';
import ArtworkSwiper from '@/components/Swiper/ArtworkSwiper/ArtworkSwiper';
import technologies from '@/data/technologies';
import { Button } from '@nextui-org/react';
import _ from 'lodash';
import Link from 'next/link';
import { FaGithubAlt } from 'react-icons/fa6';

function ProjectSection() {
	return (
		<section id='projects' className='flex flex-col gap-40 min-h-screen'>
			<div>
				<div className='flex flex-wrap gap-8 justify-center p-3'>
					{technologies.map((technology) => {
						return (
							<Link
								key={technology.url}
								href={technology.url}
								target='_blank'
								className='text-5xl block'
							>
								<technology.icon />
							</Link>
						);
					})}
				</div>
			</div>

			<div>
				<ApplicationSwiper />
			</div>

			<div>
				<ArtworkSwiper />
			</div>

			<div className='flex justify-center'>
				<Button
					as={Link}
					href='https://github.com/ctvnjhnrmmlp?tab=repositories'
					target='_blank'
					variant='bordered'
					radius='full'
					size='lg'
					className='text-2xl xs:text-4xl p-9 xs:p-11 border dark:border-[#3F3F46] mx-auto font-extrabold'
					startContent={
						<p className='pr-1'>
							<FaGithubAlt />
						</p>
					}
				>
					<span>Dive Deeper</span>
				</Button>
			</div>
		</section>
	);
}

export default ProjectSection;
