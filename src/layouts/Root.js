import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import styles from './Root.module.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Cookies from '../components/Cookies/Cookies';
import ScrollTop from '../components/UI/ScrollTop';
import { useTranslation } from 'react-i18next';

const RootLayout = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [t, i18n] = useTranslation();
	const { pathname } = useLocation();
	const contentRef = useRef();

	const menuOpenHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenuHandler = () => {
		setIsMenuOpen(false);
	};

	const onScrollHandler = () => {
		const scrollTop = contentRef.current.scrollTop;
		setIsScrolled(scrollTop > 50);
	};

	const scrollToTop = () => {
		return contentRef.current.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		closeMenuHandler();
	}, [pathname, i18n.resolvedLanguage]);

	// TODO This works well when visiting new pages, but when returning to previous page it scrolls to the top instead of returning to the previous position.
	useEffect(() => {
		scrollToTop();
	}, [pathname]);

	return (
		<div
			className={styles.content}
			onScroll={onScrollHandler}
			ref={contentRef}
			style={{ overflowY: isMenuOpen ? 'hidden' : 'auto' }}
		>
			<Header
				onMenuOpen={menuOpenHandler}
				closeMenu={closeMenuHandler}
				isMenuOpen={isMenuOpen}
				isScrolled={isScrolled}
			/>
			<Menu closeMenu={closeMenuHandler} isMenuOpen={isMenuOpen} />
			{props.children ?? (
				<>
					<Outlet context={[isScrolled, isMenuOpen]} />
					<Footer />
				</>
			)}
			<Cookies />
			<ScrollTop onClick={scrollToTop} isScrolled={isScrolled} />
		</div>
	);
};

export default RootLayout;
