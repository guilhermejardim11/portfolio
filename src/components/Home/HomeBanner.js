import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';
import { DeviceContext } from '../../context/DeviceContext';

import styles from './HomeBanner.module.scss';

import Banner from '../Banner/Banner';
import Dot from '../UI/Dot';
import Blob from '../UI/Blob';
import DownIndicator from './DownIndicator';
import Socials from '../Socials/Socials';

const HomeBanner = () => {
	const [t] = useTranslation();
	const themeContext = useContext(ThemeContext);
	const deviceContext = useContext(DeviceContext);

	return (
		<Banner className={styles.banner}>
			<h1>
				{t('hello')}
				{deviceContext.isDesktop ? <br /> : ' '}
				{t('im_guilherme')}
			</h1>
			<Dot size={deviceContext.isDesktop ? 20 : 16} />
			<h2>
				{t('uxui_designer')} &
				<br />
				{t('frontend_developer')}
			</h2>

			<Blob
				color={themeContext.isDarkMode ? '#212440' : '#9ea5f6'}
				offsetY={100}
			/>

			{deviceContext.isDesktop && <Socials className={styles.socials} />}

			<DownIndicator />
		</Banner>
	);
};

export default HomeBanner;
