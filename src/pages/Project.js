import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../database';

import styles from './Project.module.scss';

import PageTitle from '../components/Page/PageTitle';
import ProjectBanner from '../components/Project/ProjectBanner';

const ProjectPage = () => {
	let params = useParams();
	const project = projectList.find((project) => project.id === params.ID);

	useEffect(() => {
		document.body.style = `--project-color-light: ${project.colors[0]}; --project-color-dark: ${project.colors[1]};`;

		return () => {
			document.body.style = '';
		};
	}, [project.colors]);

	return (
		<>
			<PageTitle title={''} />
			<ProjectBanner title={project.title} />
			<div className={styles.content}>{project.content}</div>
		</>
	);
};

export default ProjectPage;
