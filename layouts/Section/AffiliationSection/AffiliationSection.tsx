import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
} from '@nextui-org/react';

import affiliations from '@/sources/affiliations';
import Link from 'next/link';

function AffiliationSection() {
	return (
		<section className='md:w-full'>
			<div className='flex flex-col gap-10'>
				{affiliations.map((affiliation) => (
					<Link key={affiliation.name} href={affiliation.url} target='_blank'>
						<Card
							className='py-12 px-12 md:px-0 rounded-xxl shadow-none gap-2'
							style={{
								background: affiliation.color,
							}}
						>
							<CardHeader>
								<h4 className='text-center mx-auto text-3xl sm:text-4xl text-white'>
									{affiliation.name}
								</h4>
							</CardHeader>
							<CardBody>
								<h3 className='text-center uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white'>
									{affiliation.position}
								</h3>
							</CardBody>
						</Card>
					</Link>
				))}
			</div>
		</section>
	);
}

export default AffiliationSection;
