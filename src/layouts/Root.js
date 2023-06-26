import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useMatch } from 'react-router-dom';

import styles from './Root.module.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';

const RootLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const contentRef = useRef();
    const match = useMatch('/portfolio/');

    const menuOpenHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenuHandler = () => {
        setIsMenuOpen(false);
    };

    const onScrollHandler = () => {
        const scrollTop = contentRef.current.scrollTop;
        setScrolled(scrollTop > window.innerHeight / 3);
    };

    // FIX Scroll Top - This works well when visiting new pages. But when returning to previous page, it scrolls to the top instead of returning to the desired position.
    useEffect(() => {
        contentRef.current.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div
            className={styles.content}
            style={{ overflowY: isMenuOpen ? 'hidden' : 'auto' }}
            onScroll={onScrollHandler}
            ref={contentRef}
        >
            <Header
                isScrolled={scrolled || match == null}
                onMenuOpen={menuOpenHandler}
                isMenuOpen={isMenuOpen}
            />
            <Menu closeMenu={closeMenuHandler} isMenuOpen={isMenuOpen} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;
