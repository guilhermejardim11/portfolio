import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { MenuContext } from '../../context/MenuContext';

import styles from './ThemeButton.module.scss';

const ThemeButton = (props) => {
	const themeContext = useContext(ThemeContext);
	const menuContext = useContext(MenuContext);

	return (
		<ThemeContext.Consumer>
			{({ onChangeTheme }) => (
				<button
					className={`${styles.button} ${menuContext.isMenuOpen && styles.shown} ${themeContext.isDarkMode && styles.active}`}
					onClick={() => {
						onChangeTheme();
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 51 28'
					>
						<g>
							<path d='M14,1.8A12.2,12.2,0,0,0,5.373,22.627,12.12,12.12,0,0,0,14,26.2H37A12.2,12.2,0,0,0,45.627,5.373,12.12,12.12,0,0,0,37,1.8H14M14,0H37a14,14,0,0,1,0,28H14A14,14,0,0,1,14,0Z' />
							<path d='M1948,222v-1a1,1,0,1,1,2,0v1a1,1,0,0,1-2,0Zm5.95-1.636-.707-.707a1,1,0,1,1,1.414-1.414l.706.707a1,1,0,1,1-1.414,1.415Zm-11.314,0a1,1,0,0,1,0-1.415l.707-.707a1,1,0,1,1,1.414,1.414l-.707.707a1,1,0,0,1-1.415,0ZM1945,214a4,4,0,1,1,4,4A4,4,0,0,1,1945,214Zm11,1a1,1,0,0,1,0-2h1a1,1,0,1,1,0,2Zm-15,0a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Zm12.242-5.243a1,1,0,0,1,0-1.415l.707-.706a1,1,0,0,1,1.414,1.414l-.706.707a1,1,0,0,1-1.415,0Zm-9.9,0-.706-.707a1,1,0,0,1,1.414-1.414l.707.706a1,1,0,1,1-1.414,1.415ZM1948,207v-1a1,1,0,0,1,2,0v1a1,1,0,0,1-2,0Z' />
							<path d='M-53.282,260.317a8.061,8.061,0,0,0,1.949.238,8.009,8.009,0,0,0,8-8,7.94,7.94,0,0,0-.718-3.317A7.986,7.986,0,0,1-38,257a8.009,8.009,0,0,1-8,8A8.024,8.024,0,0,1-53.282,260.317Zm.336-5.394L-54,254.3l.759-.914.21-1.2,1.112.5,1.182-.117-.072,1.222.521,1.126-1.155.258-.861.814Zm2.922-3.615-.853-.054.244-.862-.189-.862.856-.05.736-.479.285.831.644.566-.68.563-.338.829Z' />
						</g>
					</svg>
				</button>
			)}
		</ThemeContext.Consumer>
	);
};

export default ThemeButton;
