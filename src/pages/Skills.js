import { useTranslation } from 'react-i18next';

import Template from './Template';
import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import Skill from '../components/Skills/Skill';

import figma from '../assets/icons/figma.svg';
import cc from '../assets/icons/adobecc.svg';
import react from '../assets/icons/reactjs.svg';
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import js from '../assets/icons/javascript.svg';

const SkillsPage = () => {
	const [t] = useTranslation();

	return (
		<Template title={t('skills')}>
			<Section>
				<SectionTitle title={t('design')} />

				<Skill
					title={t('skill.name.figma')}
					icon={figma}
					progress={-1}
				/>
				<Skill
					title={t('skill.name.cc')}
					icon={cc}
					progress={20}
				/>
				<Skill
					title={t('skill.name.css')}
					icon={css}
					progress={80}
				/>
				<Skill
					title={t('skill.name.js')}
					icon={js}
					progress={100}
				/>
			</Section>

			<Section>
				<SectionTitle title={t('front-end')} />

				<Skill
					title={t('skill.name.react')}
					icon={react}
					progress={40}
				/>
				<Skill
					title={t('skill.name.html')}
					icon={html}
					progress={60}
				/>
				<Skill
					title={t('skill.name.css')}
					icon={css}
					progress={80}
				/>
				<Skill
					title={t('skill.name.js')}
					icon={js}
					progress={100}
				/>
			</Section>

			<Section>
				<SectionTitle title={t('back-end')} />

				<Skill
					title={t('skill.name.react')}
					icon={react}
					progress={40}
				/>
				<Skill
					title={t('skill.name.html')}
					icon={html}
					progress={60}
				/>
				<Skill
					title={t('skill.name.css')}
					icon={css}
					progress={80}
				/>
				<Skill
					title={t('skill.name.js')}
					icon={js}
					progress={100}
				/>
			</Section>

			<Section>
				<SectionTitle title={t('other')} />

				<Skill
					title={t('skill.name.react')}
					icon={react}
					progress={40}
				/>
				<Skill
					title={t('skill.name.html')}
					icon={html}
					progress={60}
				/>
				<Skill
					title={t('skill.name.css')}
					icon={css}
					progress={80}
				/>
				<Skill
					title={t('skill.name.js')}
					icon={js}
					progress={100}
				/>
			</Section>
		</Template>
	);
};

export default SkillsPage;
