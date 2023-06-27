import { useParams } from 'react-router-dom';

import ProjectBanner from '../components/Banner/ProjectBanner';

const ProjectPage = () => {
    const params = useParams();

    return (
        <main>
            <ProjectBanner
                title={`${params.ID}`}
                subtitle='Project Details'
                background='https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg'
            />
        </main>
    );
};

export default ProjectPage;
