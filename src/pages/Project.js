import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import styles from './Project.module.scss';

import ProjectBanner from '../components/Banner/ProjectBanner';

const ProjectPage = () => {
	const project = useLoaderData();

	useEffect(() => {
		document.body.style = `--project-color: ${project.color}`;

		return () => {
			document.body.style = '';
		};
	}, [project.color]);

	return (
		<main>
			<ProjectBanner
				title={project.title}
				tags={project.tags}
				thumbnail={project.thumbnail}
			/>
			<div className={styles.project_content}>
				{project.content}
			</div>
		</main>
	);
};

export default ProjectPage;
