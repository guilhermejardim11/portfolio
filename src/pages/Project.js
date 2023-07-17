import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import styles from './Project.module.scss';

import ProjectBanner from '../components/Project/ProjectBanner';
import ProjectDetails from '../components/Project/ProjectDetails';

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
			<ProjectBanner title={project.title} />
			<ProjectDetails tags={project.tags} date={project.date} />

			<div className={styles.content}>{project.content}</div>
		</main>
	);
};

export default ProjectPage;
