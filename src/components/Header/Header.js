import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { DeviceContext } from '../../context/DeviceContext';

import styles from './Header.module.scss';

import HeaderLogo from './HeaderLogo';
import HeaderTitle from './HeaderTitle';
import HeaderActions from './HeaderActions';

const Header = () => {
	const menuContext = useContext(MenuContext);
	const deviceContext = useContext(DeviceContext);

	return (
		<header className={`${styles.header} ${!menuContext.isMenuOpen && deviceContext.isScrolled ? styles.scrolled : ''}`}>
			<HeaderLogo />
			<HeaderTitle />
			<HeaderActions />
		</header>
	);
};

export default Header;
