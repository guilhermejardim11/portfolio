import { useContext } from 'react';
import { ScrolledContext } from '../../context/ScrolledContext';

import styles from './ScrollTop.module.scss';

import IconButton from './IconButton';

const ScrollTop = () => {
	const scrolledContext = useContext(ScrolledContext);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<IconButton
			className={`${styles.button} ${!scrolledContext.isScrolled ? styles.hidden : ''}`}
			title='Scroll Top'
			onClick={scrollToTop}
		/>
	);
};

export default ScrollTop;
