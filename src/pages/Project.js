import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import styles from './Project.module.scss';

import ProjectBanner from '../components/Project/ProjectBanner';
import ProjectDetails from '../components/Project/ProjectDetails';

const ProjectPage = () => {
	const project = useLoaderData();

	useEffect(() => {
		document.body.style = `--project-color-light: ${project.colors[0]}; --project-color-dark: ${project.colors[1]};`;

		return () => {
			document.body.style = '';
		};
	}, [project.colors]);

	return (
		<>
			<ProjectBanner title={project.title} />
			<ProjectDetails tags={project.tags} date={project.date} />
			<div className={styles.content}>{project.content}</div>
		</>
	);
};

export default ProjectPage;
