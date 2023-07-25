import { useEffect, useState } from 'react';

import { ThemeContext } from './ThemeContext';

const ContextWrapper = (props) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('isDarkMode') === '1') setIsDarkMode(true);
	}, []);

	useEffect(() => {
		document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
	}, [isDarkMode]);

	const changeThemeHandler = () => {
		setIsDarkMode(!isDarkMode);
		localStorage.setItem('isDarkMode', !isDarkMode ? '1' : '');
	};

	return (
		<ThemeContext.Provider
			value={{
				isDarkMode: isDarkMode,
				onChangeTheme: changeThemeHandler,
			}}
		>
			{props.children}
		</ThemeContext.Provider>
	);
};

export default ContextWrapper;
