import { projectList } from '../database';

import PageTitle from '../components/Page/PageTitle';
import HomeBanner from '../components/Home/HomeBanner';
import ProjectSection from '../components/Projects/ProjectsSection';
import AboutSection from '../components/About/AboutSection';
import ContactsSection from '../components/Contacts/ContactsSection';
import SkillsetSection from '../components/Skills/SkillsetSection';

const HomePage = () => {
	return (
		<>
			<PageTitle title={''} />

			<HomeBanner />
			<ProjectSection projectList={projectList} />
			<AboutSection />
			<SkillsetSection />
			<ContactsSection />
		</>
	);
};

export default HomePage;
