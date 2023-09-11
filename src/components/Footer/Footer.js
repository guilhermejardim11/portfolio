import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DeviceContext } from '../../context/DeviceContext';
import { projectList } from '../../database';

import styles from './Footer.module.scss';

import Copyright from './Copyright';
import FooterLogo from './FooterLogo';
import Socials from '../Socials/Socials';
import UsefulLinks from './UsefulLinks';
import Nav from '../Nav/Nav';

const Footer = () => {
	const deviceContext = useContext(DeviceContext);

	return (
		<footer className={styles.footer}>
			{deviceContext.isDesktop ? (
				<>
					<div>
						<FooterLogo />
						<Copyright />
						<Socials className={styles.socials} />
					</div>
					<div>
						<div className={styles.title}>Pages</div>
						<Nav className={styles.links} />
					</div>
					<div>
						<div className={styles.title}>Featured Projects</div>
						<ul className={styles.links}>
							{projectList.map((item) => (
								<li key={item.id}>
									<Link to={`/projects/${item.id}`}>{item.title}</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<div className={styles.title}>Links</div>
						<UsefulLinks className={styles.links} />
					</div>
				</>
			) : (
				<>
					<FooterLogo />
					<Copyright />
					<Socials />
					<UsefulLinks className={styles.links} />
				</>
			)}
		</footer>
	);
};

export default Footer;
