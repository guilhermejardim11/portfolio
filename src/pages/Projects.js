import { useTranslation } from 'react-i18next';
import { projectList } from '../database';

import Template from './Template';
import Section from '../components/Section/Section';
import OverviewGallery from '../components/Gallery/OverviewGallery';

const ProjectsPage = () => {
	const [t] = useTranslation();

	return (
		<Template title={t('projects')}>
			<Section>
				<OverviewGallery
					items={projectList}
					linkPrefix='/projects/'
				/>
			</Section>
		</Template>
	);
};

export default ProjectsPage;
