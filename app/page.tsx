import AffiliationSection from '@/containers/Section/AffiliationSection/AffiliationSection';
import ExperienceSection from '@/containers/Section/ExperienceSection/ExperienceSection';
import HomeSection from '@/containers/Section/HomeSection/HomeSection';
import ProfessionSection from '@/containers/Section/ProfessionSection/ProfessionSection';
import ProjectSection from '@/containers/Section/ProjectSection/ProjectSection';
import TechnologySection from '@/containers/Section/TechnologySection/TechnologySection';
import WeblogSection from '@/containers/Section/WeblogSection/WeblogSection';

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
