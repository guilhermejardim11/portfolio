import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { DeviceContext } from '../../context/DeviceContext';

import styles from './DownIndicator.module.scss';

import Arrow from '../UI/Arrow';

const DownIndicator = () => {
	const [t] = useTranslation();
	const deviceContext = useContext(DeviceContext);

	return (
		<div className={`${styles.scroll_down} ${deviceContext.isScrolled ? styles.hidden : ''}`}>
			<Arrow />
			<div>{t('swipe')}</div>
		</div>
	);
};

export default DownIndicator;
