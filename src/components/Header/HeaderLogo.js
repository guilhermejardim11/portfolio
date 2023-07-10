import { Link } from 'react-router-dom';

import styles from './HeaderLogo.module.scss';

import Logo from '../UI/Logo';

const HeaderLogo = () => {
	return (
		<Link to='/' className={styles.logo}>
			<Logo />
		</Link>
	);
};

export default HeaderLogo;
