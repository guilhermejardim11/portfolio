import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { MenuContext } from '../../context/MenuContext';
import { DeviceContext } from '../../context/DeviceContext';

import styles from './ThemeButton.module.scss';

import BorderButton from '../UI/BorderButton';

const ThemeButton = () => {
	const themeContext = useContext(ThemeContext);
	const menuContext = useContext(MenuContext);
	const deviceContext = useContext(DeviceContext);

	return (
		<ThemeContext.Consumer>
			{({ onChangeTheme }) => (
				<BorderButton
					className={`${styles.button} ${(menuContext.isMenuOpen || deviceContext.isDesktop) && styles.shown} ${themeContext.isDarkMode && styles.active}`}
					onClick={() => {
						onChangeTheme();
					}}
				>
					<svg>
						<path
							className={styles.sun}
							d='M8,17V16a1,1,0,1,1,2,0v1a1,1,0,0,1-2,0Zm5.95-1.636-.707-.707a1,1,0,0,1,1.414-1.414l.706.707a1,1,0,1,1-1.414,1.415Zm-11.314,0a1,1,0,0,1,0-1.415l.707-.707a1,1,0,0,1,1.414,1.414l-.707.707a1,1,0,0,1-1.415,0ZM5,9a4,4,0,1,1,4,4A4,4,0,0,1,5,9Zm11,1a1,1,0,0,1,0-2h1a1,1,0,1,1,0,2ZM1,10A1,1,0,1,1,1,8H2a1,1,0,1,1,0,2ZM13.242,4.757a1,1,0,0,1,0-1.415l.707-.707A1,1,0,0,1,15.363,4.05l-.706.707a1,1,0,0,1-1.415,0Zm-9.9,0L2.636,4.05A1,1,0,0,1,4.05,2.636l.707.707A1,1,0,1,1,3.343,4.757ZM8,2V1a1,1,0,0,1,2,0V2A1,1,0,0,1,8,2Z'
						/>
						<path
							className={styles.moon}
							d='M.717,11.317a8.074,8.074,0,0,0,1.949.239,8.009,8.009,0,0,0,8-8A7.939,7.939,0,0,0,9.949.238,8,8,0,1,1,.717,11.317Zm.337-5.395L0,5.3l.76-.914.209-1.2,1.112.5,1.183-.117L3.191,4.785l.52,1.127L2.557,6.17,1.7,6.984ZM3.975,2.308l-.853-.054.244-.861L3.178.529l.856-.05L4.77,0l.284.832L5.7,1.4l-.68.563-.338.829Z'
							transform='translate(1 1)'
						/>
					</svg>
				</BorderButton>
			)}
		</ThemeContext.Consumer>
	);
};

export default ThemeButton;
