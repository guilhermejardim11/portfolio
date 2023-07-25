import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MenuContext } from '../context/MenuContext';

import styles from './Root.module.scss';

import RootContent from './RootContent';
import Header from '../components/Header/Header';
import LanguageOverlay from '../components/Language/LanguageOverlay';
import Cookies from '../components/Cookies/Cookies';
import ScrollTop from '../components/UI/ScrollTop';

const RootLayout = (props) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [t, i18n] = useTranslation();
	const { pathname } = useLocation();
	const menuContext = useContext(MenuContext);
	const contentRef = useRef();

	const onScrollHandler = () => {
		const scrollTop = contentRef.current.scrollTop;
		setIsScrolled(scrollTop > 50);
	};

	useEffect(() => {
		menuContext.onMenuClose();
	}, [pathname, i18n.resolvedLanguage]);

	return (
		<div
			className={`${styles.root} ${menuContext.isMenuOpen ? styles.locked : ''}`}
			ref={contentRef}
			onScroll={onScrollHandler}
		>
			<Header isScrolled={isScrolled} />

			<RootContent
				children={props.children}
				isMenuOpen={menuContext.isMenuOpen}
				isScrolled={isScrolled}
			/>

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
