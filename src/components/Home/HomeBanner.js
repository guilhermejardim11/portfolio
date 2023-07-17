import { useTranslation } from 'react-i18next';

import Banner from '../Banner/Banner';
import Dot from '../UI/Dot';
import LanguageSelector from '../Language/LanguageSelector';
import DownIndicator from '../Banner/DownIndicator';

const HomeBanner = () => {
	const [t] = useTranslation();

	return (
		<Banner>
			<h1 style={{ fontSize: '45px' }}>{t('hello')}</h1>
			<Dot />
			<h2>{t('job')}</h2>

			<DownIndicator />

			<LanguageSelector />
		</Banner>
	);
};

export default HomeBanner;
