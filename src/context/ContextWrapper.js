import ThemeContextProvider from './ThemeContext';
import MenuContextProvider from './MenuContext';
import DeviceContextProvider from './DeviceContext';

const ContextWrapper = (props) => {
	return (
		<ThemeContextProvider>
			<MenuContextProvider>
				<DeviceContextProvider>
					{props.children}
				</DeviceContextProvider>
			</MenuContextProvider>
		</ThemeContextProvider>
	);
};

export default ContextWrapper;
