import styles from './Header.module.scss';

import HeaderLogo from './HeaderLogo';
import MenuButton from '../Menu/MenuButton';
import ThemeButton from '../UI/ThemeButton';

const Header = (props) => {
	return (
		<>
			<header
				className={`${styles.header} ${
					!props.isMenuOpen && props.isScrolled ? styles.scrolled : ''
				}`}
			>
				<HeaderLogo />
				<div className={styles.actions}>
					<ThemeButton isMenuOpen={props.isMenuOpen} />
					<MenuButton
						onClick={props.onMenuOpen}
						isMenuOpen={props.isMenuOpen}
					/>
				</div>
			</header>
		</>
	);
};

export default Header;
