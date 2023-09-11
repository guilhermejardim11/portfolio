import { useTranslation } from 'react-i18next';

import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import Profile from './Profile';
import Dot from '../UI/Dot';
import Experience from './Experience';

const AboutSection = () => {
	const [t] = useTranslation();

	return (
		<Section background>
			<SectionTitle title={t('about')} />
			<Profile />
			<Dot style={{ marginTop: '38px', marginBottom: '24px' }} />
			<Experience />
		</Section>
	);
};

export default AboutSection;
