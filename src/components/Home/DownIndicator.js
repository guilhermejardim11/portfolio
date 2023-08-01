import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrolledContext } from '../../context/ScrolledContext';

import styles from './DownIndicator.module.scss';

import Arrow from '../UI/Arrow';

const DownIndicator = () => {
	const [t] = useTranslation();
	const scrolledContext = useContext(ScrolledContext);

	return (
		<div
			className={`${styles.scroll_down} ${
				scrolledContext.isScrolled ? styles.hidden : ''
			}`}
		>
			<Arrow />
			<div>{t('swipe')}</div>
		</div>
	);
};

export default DownIndicator;
