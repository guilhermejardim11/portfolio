import { useTranslation } from 'react-i18next';

import styles from './DownIndicator.module.scss';

import Arrow from '../UI/Arrow';

const DownIndicator = () => {
	const [t, i18n] = useTranslation();

	return (
		<div className={styles.scroll_down}>
			<Arrow />
			<div>{t('swipe')}</div>
		</div>
	);
};

export default DownIndicator;
