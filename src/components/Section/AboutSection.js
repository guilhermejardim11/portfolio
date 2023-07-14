import { useTranslation } from 'react-i18next';

import Profile from '../About/Profile';
import Experience from '../About/Experience';
import Dot from '../UI/Dot';
import Section from './Section';
import SectionTitle from './SectionTitle';

const AboutSection = () => {
	const [t, i18n] = useTranslation();

	return (
		<Section background pattern>
			<SectionTitle title={t('section.about.title')} to='/about' text={t('know_more')} />
			<Profile />
			<Dot style={{ marginTop: '38px', marginBottom: '24px' }} />
			<Experience />
		</Section>
	);
};

export default AboutSection;
