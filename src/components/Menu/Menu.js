import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MenuContext } from '../../context/MenuContext';

import styles from './Menu.module.scss';

import Overlay from '../UI/Overlay';
import Socials from '../Socials/Socials';

const navlinkVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Menu = (props) => {
	const [t] = useTranslation();
	const menuContext = useContext(MenuContext);

	return (
		<Overlay
			className={styles.menu}
			isOpen={menuContext.isMenuOpen}
		>
			<motion.nav
				animate={menuContext.isMenuOpen ? 'open' : 'closed'}
				variants={{
					open: {
						transition: {
							duration: 0.7,
							delayChildren: 0.2,
							staggerChildren: 0.05,
						},
					},
					closed: {
						transition: {
							duration: 0.3,
						},
					},
				}}
			>
				<motion.div variants={navlinkVariants}>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? styles.active : undefined)}
						end
					>
						{t('home')}
					</NavLink>
				</motion.div>

				<motion.div variants={navlinkVariants}>
					<NavLink
						to='/projects'
						className={({ isActive }) => (isActive ? styles.active : undefined)}
						end
					>
						{t('projects')}
					</NavLink>
				</motion.div>

				<motion.div variants={navlinkVariants}>
					<NavLink
						to='/skills'
						className={({ isActive }) => (isActive ? styles.active : undefined)}
						end
					>
						{t('skills')}
					</NavLink>
				</motion.div>

				<motion.div variants={navlinkVariants}>
					<NavLink
						to='/contacts'
						className={({ isActive }) => (isActive ? styles.active : undefined)}
						end
					>
						{t('contacts')}
					</NavLink>
				</motion.div>
			</motion.nav>

			<Socials className={styles.menu_socials} />
		</Overlay>
	);
};

export default Menu;
