import styles from './Banner.module.scss';

const Banner = (props) => {
	return (
		<div className={`${props.className} ${styles.banner}`}>
			{props.children}
		</div>
	);
};

export default Banner;
