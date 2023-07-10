import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './SkillsetSection.module.scss';

import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import SkillCounter from '../Skills/SkillCounter';

import figma_light from '../../assets/icons/light/figma.svg';
import adobecc_light from '../../assets/icons/light/adobecc.svg';
import reactjs_light from '../../assets/icons/light/reactjs.svg';
import html_light from '../../assets/icons/light/html.svg';
import css_light from '../../assets/icons/light/css.svg';
import javascript_light from '../../assets/icons/light/javascript.svg';
import figma_dark from '../../assets/icons/dark/figma.svg';
import adobecc_dark from '../../assets/icons/dark/adobecc.svg';
import reactjs_dark from '../../assets/icons/dark/reactjs.svg';
import html_dark from '../../assets/icons/dark/html.svg';
import css_dark from '../../assets/icons/dark/css.svg';
import javascript_dark from '../../assets/icons/dark/javascript.svg';

const SkillsetSection = () => {
	const themeContext = useContext(ThemeContext);
	return (
		<Section>
			<SectionTitle title='Skillset' to='/skills' text='View All' />
			<div className={styles.skills}>
				<SkillCounter
					label='Figma'
					icon={!themeContext.isDarkMode ? figma_light : figma_dark}
					level={4}
				/>
				<SkillCounter
					label='Adobe CC'
					icon={
						!themeContext.isDarkMode ? adobecc_light : adobecc_dark
					}
					level={3}
				/>
				<SkillCounter
					label='React.js'
					icon={
						!themeContext.isDarkMode ? reactjs_light : reactjs_dark
					}
					level={4}
				/>
				<SkillCounter
					label='HTML'
					icon={!themeContext.isDarkMode ? html_light : html_dark}
					level={5}
				/>
				<SkillCounter
					label='SASS/SCSS'
					icon={!themeContext.isDarkMode ? css_light : css_dark}
					level={5}
				/>
				<SkillCounter
					label='JavaScript'
					icon={
						!themeContext.isDarkMode
							? javascript_light
							: javascript_dark
					}
					level={4}
				/>
			</div>
		</Section>
	);
};

export default SkillsetSection;
