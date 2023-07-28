import LanguageOverlay from '../Language/LanguageOverlay';
import Menu from '../Menu/Menu';
import Header from './Header';

const HeaderWrapper = ({ menuOpenHandler, isScrolled, isMenuOpen }) => {
	return (
		<>
			<Header />
			<Menu />
			<LanguageOverlay />
		</>
	);
};

export default HeaderWrapper;
