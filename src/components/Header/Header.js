import styles from './Header.module.scss';

import HeaderLogo from './HeaderLogo';
import MenuButton from '../Menu/MenuButton';

const Header = (props) => {
	return (
		<>
			<header
				className={`${styles.header} ${
					!props.isMenuOpen && props.isScrolled ? styles.scrolled : ''
				}`}
			>
				<HeaderLogo />
				<MenuButton
					onClick={props.onMenuOpen}
					isMenuOpen={props.isMenuOpen}
				/>
			</header>
		</>
	);
};

export default Header;
