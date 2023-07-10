import styles from './Profile.module.scss';

import avatar from '../../assets/images/avatar.jpg';

const Profile = () => {
	return (
		<div className={styles.profile}>
			<div className={styles.avatar}>
				<img src={avatar} alt='Guilherme Jardim' />
			</div>
			<p>
				Hi there! I'm Guilherme Jardim and I'm a UX/UI Designer from
				Portugal, and I have the goal to improve the quality of my
				projects and broaden my skillset!
			</p>
		</div>
	);
};

export default Profile;
