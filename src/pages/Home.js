import { projectList } from '../database';

import PageTitle from '../components/Page/PageTitle';
import HomeBanner from '../components/Home/HomeBanner';
import ProjectSection from '../components/Home/Projects/ProjectsSection';
import AboutSection from '../components/Home/About/AboutSection';
import ContactsSection from '../components/Home/Contacts/ContactsSection';
import SkillsetSection from '../components/Home/Skillset/SkillsetSection';

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
