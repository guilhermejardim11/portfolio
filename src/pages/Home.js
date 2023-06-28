import HomeBanner from '../components/Banner/HomeBanner';
import ProjectSection from '../components/Section/ProjectsSection';
import AboutSection from '../components/Section/AboutSection';
import ContactsSection from '../components/Section/ContactsSection';
import SkillsetSection from '../components/Section/SkillsetSection';
import { useLoaderData } from 'react-router-dom';

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
