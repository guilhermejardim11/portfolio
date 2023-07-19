import styles from './Socials.module.scss';

import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import dribbble from '../../assets/icons/dribbble.svg';

import Social from './Social';

const Socials = (props) => {
	return (
		<ul className={`${props.className} ${styles.socials}`}>
			<Social
				url='https://www.linkedin.com/in/guilhermejardim11/'
				social='LinkedIn'
				img={linkedin}
			/>
			<Social
				url='https://github.com/guilhermejardim11'
				social='GitHub'
				img={github}
			/>
			<Social
				url='https://dribbble.com/guilhermejardim11'
				social='Dribbble'
				img={dribbble}
			/>
		</ul>
	);
};

export default Socials;
