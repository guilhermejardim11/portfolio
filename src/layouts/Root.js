import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MenuContext } from '../context/MenuContext';

import RootContent from './RootContent';
import ScrollTop from '../components/UI/ScrollTop';

const mainVariants = {
	initial: {
		x: '-100%',
		transition: {
			duration: 0.5,
			ease: [0.87, 0, 0.13, 1],
		},
	},
	animate: {
		x: 0,
		transition: {
			duration: 0.5,
			ease: [0.87, 0, 0.13, 1],
		},
	},
	exit: {
		x: '100%',
		transition: {
			duration: 0.5,
			ease: [0.87, 0, 0.13, 1],
		},
		transitionEnd: {
			display: 'none',
		},
	},
};

const RootLayout = (props) => {
	const [t, i18n] = useTranslation();
	const location = useLocation();
	const menuContext = useContext(MenuContext);

	// const onScrollHandler = () => {
	// 	const scrollTop = contentRef.current.scrollTop;
	// 	setIsScrolled(scrollTop > 50);
	// };

	useEffect(() => {
		menuContext.onMenuClose();
	}, [location.pathname, i18n.resolvedLanguage]);

	return (
		<motion.main
			variants={mainVariants}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<RootContent
				children={props.children}
				isMenuOpen={menuContext.isMenuOpen}
				isScrolled={false}
			/>
		</motion.main>
	);
};

export default RootLayout;
