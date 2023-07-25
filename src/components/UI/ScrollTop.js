import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './ScrollTop.module.scss';

import IconButton from './IconButton';

const ScrollTop = (props) => {
	const { pathname } = useLocation();

	const scrollToTop = () => {
		return props.contentRef.current.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	// TODO This works well when visiting new pages, but when returning to previous page it scrolls to the top instead of returning to the previous position.
	useEffect(() => {
		scrollToTop();
	}, [pathname]);

	return (
		<IconButton
			className={`${styles.button} ${!props.isScrolled ? styles.hidden : ''}`}
			title='Scroll Top'
			onClick={scrollToTop}
		/>
	);
};

export default ScrollTop;
