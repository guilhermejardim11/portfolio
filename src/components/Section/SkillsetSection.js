import styles from './SkillsetSection.module.scss';

import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import SkillCounter from '../UI/SkillCounter';

import figma from '../../assets/light/icons/figma.svg';
import adobecc from '../../assets/light/icons/adobecc.svg';
import reactjs from '../../assets/light/icons/reactjs.svg';
import html from '../../assets/light/icons/html.svg';
import css from '../../assets/light/icons/css.svg';
import javascript from '../../assets/light/icons/javascript.svg';

const SkillsetSection = () => {
	return (
		<Section>
			<SectionTitle
				title='Skillset'
				to='/portfolio/skills'
				text='View All'
			/>
			<div className={styles.skills}>
				<SkillCounter label='Figma' icon={figma} level={4} />
				<SkillCounter label='Adobe CC' icon={adobecc} level={3} />
				<SkillCounter label='React.js' icon={reactjs} level={4} />
				<SkillCounter label='HTML' icon={html} level={5} />
				<SkillCounter label='SASS/SCSS' icon={css} level={5} />
				<SkillCounter label='JavaScript' icon={javascript} level={4} />
			</div>
		</Section>
	);
};

export default SkillsetSection;
