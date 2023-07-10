import Section from './Section';
import SectionTitle from './SectionTitle';
import MasonryGallery from '../Gallery/MasonryGallery';

const ProjectSection = (props) => {
	return (
		<Section>
			<SectionTitle title='Projects' to='/projects' text='View All' />
			<MasonryGallery items={props.projectList} linkPrefix='/projects/' />
		</Section>
	);
};

export default ProjectSection;
