import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuContext } from '../context/MenuContext';

import styles from './Root.module.scss';

import RootContent from './RootContent';
import Header from '../components/Header/Header';
import LanguageOverlay from '../components/Language/LanguageOverlay';
import Cookies from '../components/Cookies/Cookies';
import ScrollTop from '../components/UI/ScrollTop';
import Loading from '../components/Loading/Loading';

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
		<>
			<Loading />
			<div
				className={`${styles.root} ${menuContext.isMenuOpen ? styles.locked : ''}`}
				ref={contentRef}
				onScroll={onScrollHandler}
			>
				<Header isScrolled={isScrolled} />

				{/* <AnimatePresence
				initial={false}
				mode='popLayout'
			>
				<motion.div
					class='motion-div'
					key={location.pathname}
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 200 }}
				> */}
				<RootContent
					children={props.children}
					isMenuOpen={menuContext.isMenuOpen}
					isScrolled={isScrolled}
				/>
				{/* </motion.div>
			</AnimatePresence> */}

				<LanguageOverlay />

				<Cookies />

				<ScrollTop
					contentRef={contentRef}
					isScrolled={isScrolled}
				/>
			</div>
		</>
	);
};

export default RootLayout;
