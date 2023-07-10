import Profile from '../About/Profile';
import Experience from '../About/Experience';
import Dot from '../UI/Dot';
import Section from './Section';
import SectionTitle from './SectionTitle';

const AboutSection = () => {
	return (
		<Section background pattern>
			<SectionTitle title='About' to='/about' text='Know More' />
			<Profile />
			<Dot style={{ marginTop: '38px', marginBottom: '24px' }} />
			<Experience />
		</Section>
	);
};

export default AboutSection;
