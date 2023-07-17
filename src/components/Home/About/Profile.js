import { useTranslation } from 'react-i18next';

import styles from './Profile.module.scss';

import avatar from '../../../assets/images/avatar.jpg';

const Profile = () => {
	const [t] = useTranslation();

	return (
		<div className={styles.profile}>
			<div className={styles.avatar}>
				<img src={avatar} alt='Guilherme Jardim' />
			</div>
			<p>{t('section.about.desc')}</p>
		</div>
	);
};

export default Profile;
