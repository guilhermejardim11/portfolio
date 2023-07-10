import styles from './PageBanner.module.scss';

const PageBanner = (props) => {
	return (
		<div className={`${styles.banner} ${props.isScrolled && styles.scrolled} ${props.isMenuOpen && styles.hidden}`}>
			<h1>{props.title}</h1>
		</div>
	);
};

export default PageBanner;
