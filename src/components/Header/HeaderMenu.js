import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './HeaderMenu.module.scss';

const HeaderMenu = () => {
	const [t] = useTranslation();

	return (
		<nav className={styles.menu}>
			<NavLink
				to='/'
				className={({ isActive }) => (isActive ? styles.active : undefined)}
				end
			>
				{t('home')}
			</NavLink>

			<NavLink
				to='/projects'
				className={({ isActive }) => (isActive ? styles.active : undefined)}
				end
			>
				{t('projects')}
			</NavLink>

			<NavLink
				to='/skills'
				className={({ isActive }) => (isActive ? styles.active : undefined)}
				end
			>
				{t('skills')}
			</NavLink>
		</nav>
	);
};

export default HeaderMenu;
