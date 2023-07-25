import { useState, createContext } from 'react';

export const MenuContext = createContext({
	isMenuOpen: false,
	onMenuOpen: () => {},
	onMenuClose: () => {},
});

const MenuContextProvider = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const openMenuHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenuHandler = () => {
		setIsMenuOpen(false);
	};

	return (
		<MenuContext.Provider
			value={{
				isMenuOpen: isMenuOpen,
				onMenuOpen: openMenuHandler,
				onMenuClose: closeMenuHandler,
			}}
		>
			{props.children}
		</MenuContext.Provider>
	);
};

export default MenuContextProvider;
