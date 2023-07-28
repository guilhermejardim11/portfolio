import { useState, createContext } from 'react';

export const MenuContext = createContext({
	isMenuOpen: false,
	onMenuOpen: () => {},
	onMenuClose: () => {},
	currentPageName: '',
	setCurrentPageName: () => {},
	resetCurrentPageName: () => {},
});

const MenuContextProvider = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [currentPageName, setCurrentPageName] = useState('');

	const openMenuHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenuHandler = () => {
		setIsMenuOpen(false);
	};

	const _resetCurrentPageName = () => {
		setCurrentPageName('');
	};

	return (
		<MenuContext.Provider
			value={{
				isMenuOpen: isMenuOpen,
				onMenuOpen: openMenuHandler,
				onMenuClose: closeMenuHandler,
				currentPageName,
				setCurrentPageName,
				resetCurrentPageName: _resetCurrentPageName,
			}}
		>
			{props.children}
		</MenuContext.Provider>
	);
};

export default MenuContextProvider;
