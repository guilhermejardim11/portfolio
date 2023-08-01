import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './GoBack.module.scss';

import Arrow from '../UI/Arrow';

const GoBack = () => {
	const navigate = useNavigate();
	const [t] = useTranslation();

	return (
		<button className={styles.go_back} onClick={() => navigate(-1)}>
			<Arrow />
			<div>{t('go_back')}</div>
		</button>
	);
};

export default GoBack;
