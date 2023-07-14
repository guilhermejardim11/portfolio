import { useTranslation } from 'react-i18next';

import Section from './Section';
import SectionTitle from './SectionTitle';
import MasonryGallery from '../Gallery/MasonryGallery';

const ProjectSection = (props) => {
	const [t, i18n] = useTranslation();

	return (
		<Section>
			<SectionTitle
				title={t('section.projects.title')}
				to='/projects'
				text={t('view_all')}
			/>
			<MasonryGallery items={props.projectList} linkPrefix='/projects/' />
		</Section>
	);
};

export default ProjectSection;
