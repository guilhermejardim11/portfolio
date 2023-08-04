import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';
import { DeviceContext } from '../../context/DeviceContext';

import styles from './HomeBanner.module.scss';

import Banner from '../Banner/Banner';
import Dot from '../UI/Dot';
import Blob from '../UI/Blob';
import DownIndicator from './DownIndicator';

const HomeBanner = () => {
	const [t] = useTranslation();
	const themeContext = useContext(ThemeContext);
	const deviceContext = useContext(DeviceContext);

	return (
		<Banner className={styles.banner}>
			<h1>
				{t('hello')}
				<br />
				{t('im_guilherme')}
			</h1>
			<Dot size={deviceContext.isDesktop ? 20 : 16} />
			<h2>
				{t('uxui_designer')} &
				<br />
				{t('frontend_developer')}
			</h2>

			<Blob
				color={themeContext.isDarkMode ? '#BC2F5B' : '#FF226C'}
				offsetX={-260}
				offsetY={-400}
				opacity={0.2}
			/>
			<Blob
				color={themeContext.isDarkMode ? '#353761' : '#6C7FDC'}
				offsetX={370}
				offsetY={100}
				opacity={0.2}
			/>
			<Blob
				color={themeContext.isDarkMode ? '#222441' : '#BDC7F5'}
				offsetX={-280}
				offsetY={250}
				opacity={0.3}
			/>

			<DownIndicator />
		</Banner>
	);
};

export default HomeBanner;
