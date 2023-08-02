import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './HomeBanner.module.scss';

import Banner from '../Banner/Banner';
import Dot from '../UI/Dot';
import Blob from '../UI/Blob';
import DownIndicator from './DownIndicator';

const HomeBanner = () => {
	const [t] = useTranslation();
	const themeContext = useContext(ThemeContext);

	return (
		<Banner className={styles.banner}>
			<h1>{t('hello')}</h1>
			<Dot />
			<h2>{t('uxui_designer')} &</h2>
			<h2>{t('frontend_developer')}</h2>

			<Blob
				color={themeContext.isDarkMode ? '#BC2F5B' : '#FF226C'}
				x={-120}
				y={-210}
				opacity={0.2}
			/>
			<Blob
				color={themeContext.isDarkMode ? '#353761' : '#6C7FDC'}
				x={240}
				y={70}
				opacity={0.2}
			/>
			<Blob
				color={themeContext.isDarkMode ? '#222441' : '#BDC7F5'}
				x={-140}
				y={250}
				opacity={0.3}
			/>

			<DownIndicator />
		</Banner>
	);
};

export default HomeBanner;
