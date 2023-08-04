import { useContext } from 'react';
import { DeviceContext } from '../../context/DeviceContext';

import styles from './ScrollTop.module.scss';

import IconButton from './IconButton';

const ScrollTop = () => {
	const deviceContext = useContext(DeviceContext);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<IconButton
			className={`${styles.button} ${!deviceContext.isScrolled ? styles.hidden : ''}`}
			title='Scroll Top'
			onClick={scrollToTop}
		/>
	);
};

export default ScrollTop;
