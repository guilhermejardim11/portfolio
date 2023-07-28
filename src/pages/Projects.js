import { useTranslation } from 'react-i18next';
import { projectList } from '../database';

import styles from './Projects.module.scss';

import Section from '../components/Section/Section';
import OverviewGallery from '../components/Gallery/OverviewGallery';
import PageTitle from '../components/Page/PageTitle';

const ProjectsPage = () => {
	const [t] = useTranslation();

	return (
		<>
			<PageTitle title={t('projects')} />

			<div className={styles.main}>
				<Section>
					<OverviewGallery
						items={projectList}
						linkPrefix='/projects/'
					/>
				</Section>
			</div>
		</>
	);
};

export default ProjectsPage;
