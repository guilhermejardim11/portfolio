import { useTranslation } from 'react-i18next';

import Card from '../UI/Card';
import styles from './Experience.module.scss';

const Experience = () => {
	const [t, i18n] = useTranslation();

	return (
		<>
			<div className={styles.years}>
				<span>
					<sup>+</sup>4
				</span>
				<div>{t('section.about.years')}</div>
			</div>

			<div className={styles.projects}>
				<Card>
					<span>7</span>
					<div>{t('section.about.uxui_projects')}</div>
				</Card>

				<Card>
					<span>14</span>
					<div>{t('section.about.frontend_projects')}</div>
				</Card>

				<Card>
					<span>7</span>
					<div>{t('section.about.identity_projects')}</div>
				</Card>
			</div>
		</>
	);
};

export default Experience;
