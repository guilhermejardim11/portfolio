import styles from './Profile.module.scss';

import avatar from '../../assets/light/images/avatar.jpg';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src={avatar} alt='Guilherme Jardim' />
            <p>
                Hi there! I'm Guilherme Jardim and I'm a UX/UI Designer from
                Portugal, and I have the goal to improve the quality of my
                projects and broaden my skillset!
            </p>
        </div>
    );
};

export default Profile;
