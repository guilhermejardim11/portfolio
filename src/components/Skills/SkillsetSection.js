import { useTranslation } from 'react-i18next';

import styles from './SkillsetSection.module.scss';

import Section from '../Section/Section';
import SectionTitle from '../Section/SectionTitle';
import SkillCounter from './SkillCounter';

import figma from '../../assets/icons/figma.svg';
import cc from '../../assets/icons/adobecc.svg';
import reactjs from '../../assets/icons/reactjs.svg';
import html from '../../assets/icons/html.svg';
import sass from '../../assets/icons/sass.svg';
import javascript from '../../assets/icons/javascript.svg';

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
					label={t('figma')}
					icon={figma}
					progress={80}
				/>
				<SkillCounter
					label={t('cc')}
					icon={cc}
					progress={60}
				/>
				<SkillCounter
					label={t('reactjs')}
					icon={reactjs}
					progress={80}
				/>
				<SkillCounter
					label={t('html')}
					icon={html}
					progress={100}
				/>
				<SkillCounter
					label={t('sass')}
					icon={sass}
					progress={80}
				/>
				<SkillCounter
					label={t('javascript')}
					icon={javascript}
					progress={70}
				/>
			</div>
		</Section>
	);
};

export default SkillsetSection;
