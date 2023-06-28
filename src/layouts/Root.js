import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import styles from './Root.module.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Cookies from '../components/Cookies/Cookies';

const RootLayout = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
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
		setIsScrolled(scrollTop > window.innerHeight / 4);
	};

	// TODO Scroll Top - This works well when visiting new pages. But when returning to previous page, it scrolls to the top instead of returning to the desired position.
	useEffect(() => {
		contentRef.current.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
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
				isMenuOpen={isMenuOpen}
				isScrolled={isScrolled}
			/>
			<Menu closeMenu={closeMenuHandler} isMenuOpen={isMenuOpen} />
			<Outlet />
			<Footer />
			<Cookies />
		</div>
	);
};

export default RootLayout;
