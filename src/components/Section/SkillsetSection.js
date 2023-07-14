import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './SkillsetSection.module.scss';

import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import SkillCounter from '../Skills/SkillCounter';

import figma_light from '../../assets/icons/light/figma.svg';
import cc_light from '../../assets/icons/light/adobecc.svg';
import react_light from '../../assets/icons/light/reactjs.svg';
import html_light from '../../assets/icons/light/html.svg';
import css_light from '../../assets/icons/light/css.svg';
import js_light from '../../assets/icons/light/javascript.svg';
import figma_dark from '../../assets/icons/dark/figma.svg';
import cc_dark from '../../assets/icons/dark/adobecc.svg';
import react_dark from '../../assets/icons/dark/reactjs.svg';
import html_dark from '../../assets/icons/dark/html.svg';
import css_dark from '../../assets/icons/dark/css.svg';
import js_dark from '../../assets/icons/dark/javascript.svg';

const SkillsetSection = () => {
	const [t, i18n] = useTranslation();
	const themeContext = useContext(ThemeContext);

	return (
		<Section>
			<SectionTitle title={t('section.skillset.title')} to='/skills' text={t('view_all_f')} />
			<div className={styles.skills}>
				<SkillCounter
					label='Figma'
					icon={!themeContext.isDarkMode ? figma_light : figma_dark}
					level={4}
				/>
				<SkillCounter
					label='Adobe CC'
					icon={!themeContext.isDarkMode ? cc_light : cc_dark}
					level={3}
				/>
				<SkillCounter
					label='React.js'
					icon={!themeContext.isDarkMode ? react_light : react_dark}
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
					icon={!themeContext.isDarkMode ? js_light : js_dark}
					level={4}
				/>
			</div>
		</Section>
	);
};

export default SkillsetSection;
