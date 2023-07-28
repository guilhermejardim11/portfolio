import ThemeContextProvider from './ThemeContext';
import MenuContextProvider from './MenuContext';
import ScrolledContextProvider from './ScrolledContext';

const ContextWrapper = (props) => {
	return (
		<ThemeContextProvider>
			<MenuContextProvider>
				<ScrolledContextProvider>
					{props.children}
				</ScrolledContextProvider>
			</MenuContextProvider>
		</ThemeContextProvider>
	);
};

export default ContextWrapper;
