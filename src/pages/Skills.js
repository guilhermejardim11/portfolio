import { useTranslation } from 'react-i18next';

import PageTitle from '../components/Page/PageTitle';
import Section from '../components/Section/Section';

const SkillsPage = () => {
	const [t] = useTranslation();

	return (
		<>
			<PageTitle title={t('skills')} />

			<Section>
				my skillzzzz
			</Section>
		</>
	);
};

export default SkillsPage;
