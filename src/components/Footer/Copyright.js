import { useTranslation } from 'react-i18next';
import styles from './Copyright.module.scss';

const Copyright = () => {
	const [t, i18n] = useTranslation();
	let date = new Date().getFullYear();

	return (
		<div className={styles.copyright}>
			{t('footer.copyright', { date: date })}
			<br />
			{t('footer.rights')}
		</div>
	);
};

export default Copyright;
