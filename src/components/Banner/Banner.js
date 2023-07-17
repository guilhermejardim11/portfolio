import styles from './Banner.module.scss';

import background from '../../assets/images/background.jpg';

const Banner = (props) => {
	return (
		<div
			className={`${props.className} ${styles.banner}`}
			style={{
				backgroundImage: `url("${background}")`,
			}}
		>
			{props.children}
		</div>
	);
};

export default Banner;
