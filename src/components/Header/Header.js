import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { ScrolledContext } from '../../context/ScrolledContext';

import styles from './Header.module.scss';

import HeaderLogo from './HeaderLogo';
import HeaderTitle from './HeaderTitle';
import HeaderActions from './HeaderActions';

const Header = () => {
	const menuContext = useContext(MenuContext);
	const scrolledContext = useContext(ScrolledContext);

	return (
		<header className={`${styles.header} ${!menuContext.isMenuOpen && scrolledContext.isScrolled ? styles.scrolled : ''}`}>
			<HeaderLogo />
			<HeaderTitle />
			<HeaderActions />
		</header>
	);
};

export default Header;
