import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

import styles from './Header.module.scss';

import HeaderLogo from './HeaderLogo';
import HeaderActions from './HeaderActions';
import Menu from '../Menu/Menu';

const Header = (props) => {
	const menuContext = useContext(MenuContext);

	return (
		<>
			<header className={`${styles.header} ${!menuContext.isMenuOpen && props.isScrolled ? styles.scrolled : ''}`}>
				<HeaderLogo />
				<HeaderActions />
			</header>

			<Menu />
		</>
	);
};

export default Header;
