import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectList } from '../database';

import styles from './Project.module.scss';

import ProjectBanner from '../components/Project/ProjectBanner';
import ProjectDetails from '../components/Project/ProjectDetails';
import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import VisitProject from '../components/Project/VisitProject';

const ProjectPage = () => {
	const [t] = useTranslation();

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
			<ProjectBanner title={project.title} />
			<ProjectDetails
				tags={project.tags}
				date={project.date}
			/>
			<div className={styles.content}>
				{project.content}

				<Section
					background
					pattern
				>
					<SectionTitle title={t('skills')} />
					{/* <Skills list={project.skills} /> */}
				</Section>

				{project.visit && (
					<Section background>
						<VisitProject
							label={t(`visit.${project.type}`)}
							text={project.visit[0]}
							url={project.visit[1]}
						/>
					</Section>
				)}
			</div>
		</>
	);
};

export default ProjectPage;
