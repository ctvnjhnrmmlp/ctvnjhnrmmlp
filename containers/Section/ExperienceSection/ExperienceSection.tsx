import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
} from '@nextui-org/react';

import experiences from '@/sources/experiences';
import Link from 'next/link';
import { FiPaperclip } from 'react-icons/fi';
import { RiRadioButtonLine } from 'react-icons/ri';

function ExperienceSection() {
	return (
		<section id='experiences' className='min-h-screen'>
			<div className='flex flex-col gap-10'>
				<div className='flex justify-center'>
					<Button
						as={Link}
						href='https://drive.google.com/file/d/1TPJiavx1VgTEcLRG5KufGZjPr9I6DDcs/view?usp=sharing'
						target='_blank'
						variant='bordered'
						radius='full'
						className='text-2xl p-8 border-1 dark:border-[#3F3F46] font-extrabold'
						startContent={
							<p className='pr-1'>
								<FiPaperclip />
							</p>
						}
					>
						Open Resume
					</Button>
				</div>

				<div className='flex flex-col gap-12'>
					{experiences.map((experience) => {
						return (
							<Link key={experience.url} href={experience.url} target='_blank'>
								<Card className='dark:bg-black py-12 px-12 md:px-0 dark:border-[#3F3F46] rounded-xxl shadow-none border border-[#D4D4D8] gap-2'>
									<CardHeader className='flex flex-col'>
										<h3 className='uppercase text-4xl sm:text-5xl md:text-6xl text-center'>
											{experience.position}
										</h3>
										<h4 className='text-3xl sm:text-4xl text-center'>
											{experience.company}
										</h4>
									</CardHeader>
									<CardBody className='flex flex-col justify-center pt-2 pb-4'>
										<p className='text-center w-full sm:w-10/12 lg:w-8/12 mx-auto text-lg md:text-2xl font-extralight'>
											{experience.description}
										</p>
									</CardBody>
									<CardFooter className='flex flex-col gap-2'>
										<Chip
											className='dark:bg-white dark:text-black text-white bg-black text-sm font-bold'
											variant='shadow'
											radius='sm'
										>
											{experience.duration}
										</Chip>
										<div className='flex items-center justify-center gap-0.5'>
											<p className='text-center'>
												<RiRadioButtonLine />
											</p>
											<p>{experience.mode}</p>
										</div>
									</CardFooter>
								</Card>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default ExperienceSection;
