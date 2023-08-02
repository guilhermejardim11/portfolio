import { useTranslation } from 'react-i18next';

import Template from './Template';
import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import Skill from '../components/Skills/Skill';

import figma from '../assets/icons/figma.svg';
import adobexd from '../assets/icons/adobexd.svg';
import adobecc from '../assets/icons/adobecc.svg';
import react from '../assets/icons/reactjs.svg';
import reactrouter from '../assets/icons/reactrouter.svg';
import redux from '../assets/icons/redux.svg';
import html from '../assets/icons/html.svg';
import sass from '../assets/icons/sass.svg';
import css from '../assets/icons/css.svg';
import js from '../assets/icons/javascript.svg';
import jquery from '../assets/icons/jquery.svg';
import php from '../assets/icons/php.svg';
import wordpress from '../assets/icons/wordpress.svg';
import nodejs from '../assets/icons/nodejs.svg';

const SkillsPage = () => {
	const [t] = useTranslation();

	const skills = {
		design: [
			{
				title: t('figma'),
				icon: figma,
				progress: 80,
			},
			{
				title: t('adobexd'),
				icon: adobexd,
				progress: 95,
			},
			{
				title: t('adobecc'),
				icon: adobecc,
				progress: 60,
			},
		],
		frontend: [
			{
				title: t('reactjs'),
				icon: react,
				progress: 85,
			},
			{
				title: t('reactrouter'),
				icon: reactrouter,
				progress: 70,
			},
			{
				title: t('redux'),
				icon: redux,
				progress: 35,
			},
			{
				title: t('js'),
				icon: js,
				progress: 70,
			},
			{
				title: t('sass'),
				icon: sass,
				progress: 80,
			},
			{
				title: t('jquery'),
				icon: jquery,
				progress: 75,
			},
			{
				title: t('css'),
				icon: css,
				progress: 100,
			},
			{
				title: t('html'),
				icon: html,
				progress: 100,
			},
		],
		backend: [
			{
				title: t('php'),
				icon: php,
				progress: -1,
			},
		],
		other: [
			{
				title: t('wordpress'),
				icon: wordpress,
				progress: 90,
			},
			{
				title: t('nodejs'),
				icon: nodejs,
				progress: 10,
			},
		],
	};

	const skillOutput = [];
	for (var key in skills) {
		skillOutput.push(
			<Section key={key}>
				<SectionTitle title={t(key)} />

				{skills[key].map((value) => (
					<Skill
						key={value.title}
						title={t(value.title)}
						icon={value.icon}
						progress={value.progress}
					/>
				))}
			</Section>
		);
	}

	return <Template title={t('skills')}>{skillOutput}</Template>;
};

export default SkillsPage;
