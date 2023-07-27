import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MenuContext } from '../context/MenuContext';

import styles from './Root.module.scss';

import RootContent from './RootContent';
import Header from '../components/Header/Header';
import LanguageOverlay from '../components/Language/LanguageOverlay';
import Cookies from '../components/Cookies/Cookies';
import ScrollTop from '../components/UI/ScrollTop';

const contentVariants = {
	initial: {
		opacity: 0,
		zIndex: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
	animate: {
		opacity: 1,
		zIndex: 0,
		borderRadius: '0',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
	exit: {
		opacity: 1,
		zIndex: -1,
		transition: {
			duration: 0.5,
			zIndex: {
				duration: 0,
			},
		},
	},
};

const RootLayout = (props) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [t, i18n] = useTranslation();
	const location = useLocation();
	const menuContext = useContext(MenuContext);
	const contentRef = useRef();

	const onScrollHandler = () => {
		const scrollTop = contentRef.current.scrollTop;
		setIsScrolled(scrollTop > 50);
	};

	useEffect(() => {
		menuContext.onMenuClose();
	}, [location.pathname, i18n.resolvedLanguage]);

	return (
		<div
			className={`${styles.root} ${menuContext.isMenuOpen ? styles.locked : ''}`}
			ref={contentRef}
			onScroll={onScrollHandler}
		>
			<Header isScrolled={isScrolled} />

			<motion.div
				className='motion-div'
				variants={contentVariants}
				initial='initial'
				animate='animate'
				exit='exit'
			>
				<RootContent
					children={props.children}
					isMenuOpen={menuContext.isMenuOpen}
					isScrolled={isScrolled}
				/>
			</motion.div>

			<LanguageOverlay />

			<Cookies />

			<ScrollTop
				contentRef={contentRef}
				isScrolled={isScrolled}
			/>
		</div>
	);
};

export default RootLayout;
