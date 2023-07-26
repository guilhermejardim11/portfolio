import { useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectList } from '../database';

import styles from './Projects.module.scss';

import PageBanner from '../components/Page/PageBanner';
import Section from '../components/Section/Section';
import OverviewGallery from '../components/Gallery/OverviewGallery';

const ProjectsPage = () => {
	const [isScrolled, isMenuOpen] = useOutletContext();
	const [t] = useTranslation();

	return (
		<>
			<PageBanner
				title={t('projects')}
				isScrolled={isScrolled}
				isMenuOpen={isMenuOpen}
			/>
			<main className={styles.main}>
				<Section>
					<OverviewGallery
						items={projectList}
						linkPrefix='/projects/'
					/>
				</Section>
			</main>
		</>
	);
};

export default ProjectsPage;
