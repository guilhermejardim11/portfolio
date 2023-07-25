import styles from './HeaderActions.module.scss';

import MenuButton from '../Menu/MenuButton';
import ThemeButton from '../Theme/ThemeButton';

const HeaderActions = ({ isMenuOpen, onMenuOpen }) => {
	return (
		<div className={styles.actions}>
			<ThemeButton isMenuOpen={isMenuOpen} />
			<MenuButton onClick={onMenuOpen} isMenuOpen={isMenuOpen} />
		</div>
	);
};

export default HeaderActions;
