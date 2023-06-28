import { useLoaderData } from 'react-router-dom';
import Gallery from '../components/Gallery/Gallery';
import Section from '../components/Section/Section';

const ProjectsPage = () => {
    const projectList = useLoaderData();

    return (
        <main>
            <Section>
                <Gallery projectList={projectList} />
            </Section>
        </main>
    );
};

export default ProjectsPage;
