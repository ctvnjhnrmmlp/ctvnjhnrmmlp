'use client';

import ExperienceSection from '@/layouts/Section/ExperienceSection/ExperienceSection';
import HeroSection from '@/layouts/Section/HeroSection/HeroSection';
import ProfessionSection from '@/layouts/Section/ProfessionSection/ProfessionSection';
import ProjectSection from '@/layouts/Section/ProjectSection/ProjectSection';
import WeblogSection from '@/layouts/Section/WeblogSection/WeblogSection';

function Home() {
	return (
		<main className='flex gap-40 min-h-screen flex-col items-center justify-between p-32'>
			<HeroSection />
			<ProfessionSection />
			<ExperienceSection />
			<ProjectSection />
			<WeblogSection />
		</main>
	);
}

export default Home;
