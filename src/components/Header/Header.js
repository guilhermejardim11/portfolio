import styles from './Header.module.scss';

import HeaderLogo from './HeaderLogo';
import HeaderActions from './HeaderActions';

const Header = (props) => {
	return (
		<>
			<header
				className={`${styles.header} ${
					!props.isMenuOpen && props.isScrolled ? styles.scrolled : ''
				}`}
			>
				<HeaderLogo />
				<HeaderActions
					isMenuOpen={props.isMenuOpen}
					onMenuOpen={props.onMenuOpen}
				/>
			</header>
		</>
	);
};

export default Header;
