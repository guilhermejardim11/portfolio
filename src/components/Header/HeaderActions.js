import styles from './HeaderActions.module.scss';

import MenuButton from '../Menu/MenuButton';
import ThemeButton from '../Theme/ThemeButton';

const HeaderActions = () => {
	return (
		<div className={styles.actions}>
			<ThemeButton />
			<MenuButton />
		</div>
	);
};

export default HeaderActions;
