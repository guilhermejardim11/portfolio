import { useTranslation } from 'react-i18next';

import background from '../../assets/images/background.jpg';

import Banner from './Banner';
import Dot from '../UI/Dot';
import LanguageSelector from '../Language/LanguageSelector';

const HomeBanner = () => {
	const [t, i18n] = useTranslation();

	return (
		<Banner background={background}>
			<h1 style={{ fontSize: '45px' }}>{t('hello')}</h1>
			<Dot />
			<h2>{t('job')}</h2>
			<br />
			<LanguageSelector />
		</Banner>
	);
};

export default HomeBanner;
