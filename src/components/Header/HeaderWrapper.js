import styles from './HeaderWrapper.module.scss';

import LanguageOverlay from '../Language/LanguageOverlay';
import Menu from '../Menu/Menu';
import Header from './Header';

const HeaderWrapper = ({ menuOpenHandler, isScrolled, isMenuOpen }) => {
	return (
		<>
			<Header
				onMenuOpen={menuOpenHandler}
				isMenuOpen={isMenuOpen}
				isScrolled={isScrolled}
			/>
			<Menu isMenuOpen={isMenuOpen} />
			<LanguageOverlay isOpen={false} />
		</>
	);
};

export default HeaderWrapper;
