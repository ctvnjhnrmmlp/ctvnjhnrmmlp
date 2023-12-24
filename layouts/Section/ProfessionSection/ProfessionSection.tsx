import professions from '@/data/professions';

function ProfessionSection() {
	return (
		<section className='flex items-center min-h-screen w-screen'>
			<div className='flex flex-col gap-6 md:gap-4 mx-auto'>
				{professions.map((profession) => {
					return (
						<div key={profession}>
							<h2 className='text-center uppercase text-4xl sm:text-5xl md:text-heading-two-large leading-none mx-auto'>
								{profession}
							</h2>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default ProfessionSection;
