import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

import styles from './MenuButton.module.scss';

import Dot from '../UI/Dot';

const MenuButton = () => {
	const menuContext = useContext(MenuContext);

	return (
		<MenuContext.Consumer>
			{({ onMenuOpen }) => (
				<button
					type='button'
					title='Menu Button'
					className={`${styles.button} ${menuContext.isMenuOpen && styles.active}`}
					onClick={() => {
						onMenuOpen();
					}}
				>
					<Dot
						className={styles.dot}
						size='28'
					/>
					<i></i>
				</button>
			)}
		</MenuContext.Consumer>
	);
};

export default MenuButton;
