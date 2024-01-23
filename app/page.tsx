import AffiliationSection from '@/layouts/Section/AffiliationSection/AffiliationSection';
import ExperienceSection from '@/layouts/Section/ExperienceSection/ExperienceSection';
import HomeSection from '@/layouts/Section/HomeSection/HomeSection';
import ProfessionSection from '@/layouts/Section/ProfessionSection/ProfessionSection';
import ProjectSection from '@/layouts/Section/ProjectSection/ProjectSection';
import TechnologySection from '@/layouts/Section/TechnologySection/TechnologySection';
import WeblogSection from '@/layouts/Section/WeblogSection/WeblogSection';

function Home() {
	return (
		<main className='flex gap-48 min-h-screen flex-col items-center justify-between p-32'>
			<HomeSection />
			<ProfessionSection />
			<ExperienceSection />
			<TechnologySection />
			<AffiliationSection />
			<ProjectSection />
			<WeblogSection />
		</main>
	);
}

export default Home;
