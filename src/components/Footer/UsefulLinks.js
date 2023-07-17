import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './UsefulLinks.module.scss';

const UsefulLinks = () => {
	const [t] = useTranslation();

	return (
		<ul className={styles.links}>
			<li>
				<Link to='/privacy-policy'>{t('privacy_policy')}</Link>
			</li>
			<li>
				<Link to='/terms-and-conditions'>{t('terms_and_conditions')}</Link>
			</li>
			<li>
				<Link to='/sitemap'>{t('sitemap')}</Link>
			</li>
		</ul>
	);
};

export default UsefulLinks;
