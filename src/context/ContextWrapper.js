import ThemeContextProvider from './ThemeContext';
import MenuContextProvider from './MenuContext';

const ContextWrapper = (props) => {
	return (
		<ThemeContextProvider>
			<MenuContextProvider>
				{props.children}
			</MenuContextProvider>
		</ThemeContextProvider>
	);
};

export default ContextWrapper;
