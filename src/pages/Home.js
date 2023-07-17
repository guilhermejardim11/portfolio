import { useLoaderData } from 'react-router-dom';

import HomeBanner from '../components/Home/HomeBanner';
import ProjectSection from '../components/Home/Projects/ProjectsSection';
import AboutSection from '../components/Home/About/AboutSection';
import ContactsSection from '../components/Home/Contacts/ContactsSection';
import SkillsetSection from '../components/Home/Skillset/SkillsetSection';

const HomePage = () => {
	const projectList = useLoaderData();

	return (
		<main>
			<HomeBanner />
			<ProjectSection projectList={projectList} />
			<AboutSection />
			<SkillsetSection />
			<ContactsSection />
		</main>
	);
};

export default HomePage;
