import { useLoaderData, useOutletContext } from 'react-router-dom';

import styles from './Projects.module.scss';

import Section from '../components/Section/Section';
import PageBanner from '../components/Banner/PageBanner';
import OverviewGallery from '../components/Gallery/OverviewGallery';

const ProjectsPage = (props) => {
	const projectList = useLoaderData();
	const [isScrolled, isMenuOpen] = useOutletContext();

	return (
		<main className={styles.main}>
			<PageBanner title='Projects' isScrolled={isScrolled} isMenuOpen={isMenuOpen} />
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
