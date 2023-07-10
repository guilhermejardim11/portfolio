import { useContext } from 'react';

import styles from './Socials.module.scss';

import linkedin_light from '../../assets/icons/light/linkedin.svg';
import github_light from '../../assets/icons/light/github.svg';
import dribbble_light from '../../assets/icons/light/dribbble.svg';
import linkedin_dark from '../../assets/icons/dark/linkedin.svg';
import github_dark from '../../assets/icons/dark/github.svg';
import dribbble_dark from '../../assets/icons/dark/dribbble.svg';

import { ThemeContext } from '../../context/ThemeContext';
import Social from './Social';

const Socials = (props) => {
	const themeContext = useContext(ThemeContext);

	return (
		<ul className={`${props.className} ${styles.socials}`}>
			<Social
				url='https://www.linkedin.com/in/guilhermejardim11/'
				social='LinkedIn'
				img={!themeContext.isDarkMode ? linkedin_light : linkedin_dark}
			/>
			<Social
				url='https://github.com/guilhermejardim11'
				social='GitHub'
				img={!themeContext.isDarkMode ? github_light : github_dark}
			/>
			<Social
				url='https://dribbble.com/guilhermejardim11'
				social='Dribbble'
				img={!themeContext.isDarkMode ? dribbble_light : dribbble_dark}
			/>
		</ul>
	);
};

export default Socials;
