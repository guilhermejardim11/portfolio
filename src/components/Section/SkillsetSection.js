import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './SkillsetSection.module.scss';

import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import SkillCounter from '../Skills/SkillCounter';

import figma from '../../assets/icons/figma.svg';
import cc from '../../assets/icons/adobecc.svg';
import react from '../../assets/icons/reactjs.svg';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import js from '../../assets/icons/javascript.svg';

const SkillsetSection = () => {
	const [t, i18n] = useTranslation();
	const themeContext = useContext(ThemeContext);

	return (
		<Section>
			<SectionTitle
				title={t('skillset')}
				to='/skills'
				text={t('view_all_f')}
			/>
			<div className={styles.skills}>
				<SkillCounter label='Figma' icon={figma} level={4} />
				<SkillCounter label='Adobe CC' icon={cc} level={3} />
				<SkillCounter label='React.js' icon={react} level={4} />
				<SkillCounter label='HTML' icon={html} level={5} />
				<SkillCounter label='SASS/SCSS' icon={css} level={5} />
				<SkillCounter label='JavaScript' icon={js} level={4} />
			</div>
		</Section>
	);
};

export default SkillsetSection;
