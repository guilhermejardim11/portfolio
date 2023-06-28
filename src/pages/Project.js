import { useLoaderData } from 'react-router-dom';

import ProjectBanner from '../components/Banner/ProjectBanner';

const ProjectPage = () => {
    const project = useLoaderData();

    return (
        <main>
            <ProjectBanner
                title={project.title}
                tags={project.tags}
                thumbnail={project.thumbnail}
            />
            {project.content}
        </main>
    );
};

export default ProjectPage;
