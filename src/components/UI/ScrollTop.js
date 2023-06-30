import styles from './ScrollTop.module.scss';

import IconButton from './IconButton';

const ScrollTop = (props) => {
	const onClickHandler = () => {
		props.onClick();
	};

	return (
		<IconButton
			className={`${styles.button} ${!props.isScrolled ? styles.hidden : ''}`}
			onClick={onClickHandler}
		/>
	);
};

export default ScrollTop;
