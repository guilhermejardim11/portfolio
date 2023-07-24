import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Menu.module.scss';

import Overlay from '../UI/Overlay';
import Socials from '../Socials/Socials';

const Menu = (props) => {
	const [t] = useTranslation();

	return (
		<Overlay className={styles.menu} isOpen={props.isMenuOpen}>
			<nav>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? styles.active : undefined
					}
					end
				>
					{t('home')}
				</NavLink>
				<NavLink
					to='/projects'
					className={({ isActive }) =>
						isActive ? styles.active : undefined
					}
					end
				>
					{t('projects')}
				</NavLink>
				<NavLink
					to='/skills'
					className={({ isActive }) =>
						isActive ? styles.active : undefined
					}
					end
				>
					{t('skills')}
				</NavLink>
				<NavLink
					to='/contacts'
					className={({ isActive }) =>
						isActive ? styles.active : undefined
					}
					end
				>
					{t('contacts')}
				</NavLink>
			</nav>

			<Socials className={styles.menu_socials} />
		</Overlay>
	);
};

export default Menu;
