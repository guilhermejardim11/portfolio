import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { DeviceContext } from '../../context/DeviceContext';

import styles from './Header.module.scss';

import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderActions from './HeaderActions';
import HeaderTitle from './HeaderTitle';
import HeaderMobileActions from './HeaderMobileActions';

const Header = () => {
	const menuContext = useContext(MenuContext);
	const deviceContext = useContext(DeviceContext);

	return (
		<header className={`${styles.header} ${!menuContext.isMenuOpen && deviceContext.isScrolled ? styles.scrolled : ''}`}>
			<HeaderLogo />
			{deviceContext.isDesktop ? (
				<>
					<HeaderMenu />
					<HeaderActions />
				</>
			) : (
				<>
					<HeaderTitle />
					<HeaderMobileActions />
				</>
			)}
		</header>
	);
};

export default Header;
