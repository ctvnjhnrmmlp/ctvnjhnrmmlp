'use client';

import accounts from '@/sources/accounts';
import weblogs from '@/sources/weblogs';
import getTotalWorkingExperience from '@/utilities/getTotalWorkingExperience';
import { Card, CardBody, Chip } from '@nextui-org/react';
import Link from 'next/link';
import { FiPaperclip } from 'react-icons/fi';

import affiliations from '@/sources/affiliations';
import experiences from '@/sources/experiences';
import professions from '@/sources/professions';
import { GoDotFill } from 'react-icons/go';
import { RiSparkling2Fill } from 'react-icons/ri';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-[#181818]'>
			<section className='flex flex-col space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 overflow-x-hidden px-28 sm:px-24 py-24'>
				<Card
					classNames={{
						base: 'bg-background rounded-3xl shadow-none',
						body: 'py-6 sm:py-8 px-8',
					}}
				>
					<CardBody>
						<h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase text-center leading-none [text-shadow:_0px_2px_20px_#FFFFFF]'>
							{getTotalWorkingExperience()}+ Year Experience
						</h1>
					</CardBody>
				</Card>
				<Card
					classNames={{
						base: 'rounded-3xl bg-self-abstract bg-no-repeat bg-cover bg-center shadow-none',
						body: 'py-16 sm:py-24 px-12',
					}}
				>
					<CardBody>
						<h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase text-center leading-none tracking-tight  [text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)]'>
							John Rommel Octaviano
						</h1>
					</CardBody>
				</Card>
				<div className='flex flex-wrap gap-4 lg:gap-6 justify-center lg:justify-between'>
					{accounts.map((account) => (
						<button
							key={account.name}
							className='py-2 px-3 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-xl sm:rounded-3xl text-center bg-background'
						>
							<account.icon />
						</button>
					))}
					<button className='py-2 px-6 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-xl sm:rounded-3xl text-center sm:flex-grow bg-background'>
						<div className='flex justify-center items-center'>
							<Link
								href='https://rxresu.me/ctvnjhnrmmlp/resume'
								target='_blank'
								className='flex space-x-2 lg:space-x-4 items-center'
							>
								<span>
									<FiPaperclip />
								</span>
								<h4 className='block md:hidden lg:block'>Resume</h4>
							</Link>
						</div>
					</button>
				</div>
				<div className='grid xl:grid-cols-2 gap-6 md:gap-4 lg:gap-6'>
					{experiences.map((experience) => (
						<Card
							key={experience.company}
							classNames={{
								base: 'bg-background rounded-3xl shadow-none',
								body: 'py-20 px-12 flex items-center flex-col space-y-4',
							}}
						>
							<CardBody>
								<h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-center leading-none tracking-tight'>
									{experience.position}
								</h2>
								<p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center leading-none font-extralight text-balance'>
									{experience.company}
								</p>
								<Chip
									variant='bordered'
									size='lg'
									className='text-xs sm:text-sm md:text-lg border-1 p-2 sm:px-4 sm:py-5 font-extralight leading-none block flex items-center justify-center'
									startContent={
										<p className='p-1'>
											{experience.current && <RiSparkling2Fill />}
											{!experience.current && <GoDotFill />}
										</p>
									}
								>
									{experience.current && (
										<span className='block leading-none'>Current</span>
									)}
									{!experience.current && (
										<span className='block leading-none'>Former</span>
									)}
								</Chip>
							</CardBody>
						</Card>
					))}
				</div>
				<div className='flex flex-col xl:flex-row flex-wrap gap-6 md:gap-4 lg:gap-6'>
					{professions.map((profession) => (
						<Card
							key={profession.name}
							classNames={{
								base: `rounded-3xl bg-no-repeat bg-cover bg-center flex-grow shadow-none`,
								body: 'py-16 sm:py-20 px-12 flex flex-col space-y-4',
							}}
							style={{
								backgroundImage: `url(/images/${profession.slug}.png)`,
							}}
						>
							<CardBody>
								<h3 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-center leading-none tracking-tight [text-shadow:_1px_1px_1px_rgb(0_0_0_/_40%)]'>
									{profession.name}
								</h3>
							</CardBody>
						</Card>
					))}
				</div>
				<div className='flex flex-col md:flex-row flex-wrap sm:flex-nowrap md:flex-wrap gap-6 md:gap-4 lg:gap-6'>
					{professions.map((profession) => (
						<Card
							key={profession.name}
							classNames={{
								base: `rounded-3xl bg-background shadow-none`,
								body: 'p-12 flex flex-col space-y-4',
							}}
						>
							<CardBody>
								<div className='flex flex-wrap justify-center md:justify-start gap-6 md:gap-4 lg:gap-6'>
									{profession.technologies.map((technology) => (
										<Link
											key={technology.name}
											href={technology.url}
											target='_blank'
										>
											<p className='text-4xl md:text-5xl lg:text-6xl'>
												<technology.icon />
											</p>
										</Link>
									))}
								</div>
							</CardBody>
						</Card>
					))}
				</div>
				<div className='flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center gap-6 md:gap-4 lg:gap-6'>
					{affiliations.map((affiliation) => (
						<Card
							key={affiliation.name}
							classNames={{
								base: `rounded-3xl bg-background shadow-none`,
								body: 'py-12 sm:py-16 px-12 flex flex-col items-center justify-center rounded-3xl text-center overflow-hidden',
							}}
						>
							<CardBody>
								<h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
									{affiliation.shortname}
								</h3>
								<p className='text-xs sm:text-sm line-clamp-2'>
									{affiliation.name}
								</p>
							</CardBody>
						</Card>
					))}
				</div>
				<div className='flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-6'>
					{weblogs.map((weblog) => (
						<button
							key={weblog.url}
							className='py-2 px-3 sm:p-4 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-5xl lg:text-6xl rounded-xl sm:rounded-3xl text-center bg-background'
						>
							<weblog.icon />
						</button>
					))}
				</div>
			</section>
		</main>
	);
}
