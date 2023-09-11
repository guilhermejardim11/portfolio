import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Nav = (props) => {
	const [t] = useTranslation();

	return (
		<nav className={props.className}>
			<NavLink
				to='/'
				className={({ isActive }) => (isActive ? props.activeStyle : undefined)}
				end
			>
				{t('home')}
			</NavLink>

			<NavLink
				to='/projects'
				className={({ isActive }) => (isActive ? props.activeStyle : undefined)}
				end
			>
				{t('projects')}
			</NavLink>

			<NavLink
				to='/skills'
				className={({ isActive }) => (isActive ? props.activeStyle : undefined)}
				end
			>
				{t('skills')}
			</NavLink>
		</nav>
	);
};

export default Nav;
