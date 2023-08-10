import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { projectList } from '../database';
import { DeviceContext } from '../context/DeviceContext';

import Template from './Template';
import Section from '../components/Section/Section';
import OverviewGallery from '../components/Gallery/OverviewGallery';
import Gallery from '../components/Gallery/Gallery';

const ProjectsPage = () => {
	const [t] = useTranslation();
	const deviceContext = useContext(DeviceContext);

	return (
		<Template title={t('projects')}>
			<Section>
				{deviceContext.isDesktop ? (
					<Gallery
						items={projectList}
						linkPrefix='/projects/'
					/>
				) : (
					<OverviewGallery
						items={projectList}
						linkPrefix='/projects/'
					/>
				)}
			</Section>
		</Template>
	);
};

export default ProjectsPage;
