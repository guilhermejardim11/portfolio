import { useTranslation } from 'react-i18next';

import Section from '../../Section/Section';
import SectionTitle from '../../Section/SectionTitle';
import MasonryGallery from '../../Gallery/MasonryGallery';

const ProjectSection = (props) => {
	const [t] = useTranslation();

	return (
		<Section>
			<SectionTitle
				title={t('projects')}
				to='/projects'
				text={t('view_all')}
			/>
			<MasonryGallery items={props.projectList} linkPrefix='/projects/' />
		</Section>
	);
};

export default ProjectSection;
