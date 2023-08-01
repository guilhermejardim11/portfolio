import { useTranslation } from 'react-i18next';

import styles from './SkillsetSection.module.scss';

import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import SkillCounter from './SkillCounter';

import figma from '../../assets/icons/figma.svg';
import cc from '../../assets/icons/adobecc.svg';
import react from '../../assets/icons/reactjs.svg';
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import js from '../../assets/icons/javascript.svg';

const SkillsetSection = () => {
	const [t] = useTranslation();

	return (
		<Section>
			<SectionTitle
				title={t('skillset')}
				to='/skills'
				text={t('view_all_f')}
			/>

			<div className={styles.skills}>
				<SkillCounter
					label={t('skill.name.figma')}
					icon={figma}
					progress={80}
				/>
				<SkillCounter
					label={t('skill.name.cc')}
					icon={cc}
					progress={60}
				/>
				<SkillCounter
					label={t('skill.name.react')}
					icon={react}
					progress={80}
				/>
				<SkillCounter
					label={t('skill.name.html')}
					icon={html}
					progress={100}
				/>
				<SkillCounter
					label={t('skill.name.css')}
					icon={css}
					progress={100}
				/>
				<SkillCounter
					label={t('skill.name.js')}
					icon={js}
					progress={80}
				/>
			</div>
		</Section>
	);
};

export default SkillsetSection;
