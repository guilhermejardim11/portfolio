import styles from './ProjectBanner.module.scss';

import Banner from '../Banner/Banner';
import GoBack from '../Banner/GoBack';

const ProjectBanner = (props) => {
	return (
		<Banner className={styles.banner}>
			<GoBack />
			<h1>{props.title}</h1>
		</Banner>
	);
};

export default ProjectBanner;
