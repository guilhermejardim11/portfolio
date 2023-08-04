import styles from './HeaderMobileActions.module.scss';

import MenuButton from '../Menu/MenuButton';
import ThemeButton from '../Theme/ThemeButton';
import Language from '../Language/Language';

const HeaderMobileActions = () => {
	return (
		<div className={styles.actions}>
			<ThemeButton />
			<Language />
			<MenuButton />
		</div>
	);
};

export default HeaderMobileActions;
