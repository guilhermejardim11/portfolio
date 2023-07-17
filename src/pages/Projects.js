import { useLoaderData, useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Projects.module.scss';

import PageBanner from '../components/Page/PageBanner';
import Section from '../components/Section/Section';
import OverviewGallery from '../components/Gallery/OverviewGallery';

const ProjectsPage = (props) => {
	const projectList = useLoaderData();
	const [isScrolled, isMenuOpen] = useOutletContext();
	const [t, i18n] = useTranslation();

	return (
		<main className={styles.main}>
			<PageBanner
				title={t('page.projects')}
				isScrolled={isScrolled}
				isMenuOpen={isMenuOpen}
			/>
			<div>
				<Section>
					<OverviewGallery
						items={projectList}
						linkPrefix='/projects/'
					/>
				</Section>
			</div>
		</main>
	);
};

export default ProjectsPage;
