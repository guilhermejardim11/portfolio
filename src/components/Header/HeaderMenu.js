import styles from './HeaderMenu.module.scss';

import Nav from '../Nav/Nav';

const HeaderMenu = () => {
	return (
		<Nav
			className={styles.menu}
			activeStyle={styles.active}
		/>
	);
};

export default HeaderMenu;
