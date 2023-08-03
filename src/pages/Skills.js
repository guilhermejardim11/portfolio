import { useTranslation } from 'react-i18next';

import Template from './Template';
import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import Skill from '../components/Skills/Skill';

import figma from '../assets/icons/figma.svg';
import xd from '../assets/icons/xd.svg';
import illustrator from '../assets/icons/illustrator.svg';
import photoshop from '../assets/icons/photoshop.svg';
import premiere from '../assets/icons/premiere.svg';
import aftereffects from '../assets/icons/aftereffects.svg';
import react from '../assets/icons/reactjs.svg';
import reactrouter from '../assets/icons/reactrouter.svg';
import redux from '../assets/icons/redux.svg';
import html from '../assets/icons/html.svg';
import sass from '../assets/icons/sass.svg';
import css from '../assets/icons/css.svg';
import javascript from '../assets/icons/javascript.svg';
import jquery from '../assets/icons/jquery.svg';
import php from '../assets/icons/php.svg';
import wordpress from '../assets/icons/wordpress.svg';
import nodejs from '../assets/icons/nodejs.svg';
import typescript from '../assets/icons/typescript.svg';
import postman from '../assets/icons/postman.svg';
import sql from '../assets/icons/sql.svg';
import mysql from '../assets/icons/mysql.svg';
import csharp from '../assets/icons/csharp.svg';
import java from '../assets/icons/java.svg';
import visualstudiocode from '../assets/icons/visualstudiocode.svg';
import visualstudio from '../assets/icons/visualstudio.svg';
import git from '../assets/icons/git.svg';
import github from '../assets/icons/github_s.svg';
import notion from '../assets/icons/notion.svg';
import azuredevops from '../assets/icons/azuredevops.svg';
import jira from '../assets/icons/jira.svg';

const SkillsPage = () => {
	const [t] = useTranslation();

	const skills = {
		ux_ui: [
			{
				title: t('figma'),
				icon: figma,
				progress: 80,
			},
			{
				title: t('xd'),
				icon: xd,
				progress: 95,
			},
			{
				title: t('illustrator'),
				icon: illustrator,
				progress: 75,
			},
			{
				title: t('photoshop'),
				icon: photoshop,
				progress: 65,
			},
			{
				title: t('premiere'),
				icon: premiere,
				progress: 50,
			},
			{
				title: t('aftereffects'),
				icon: aftereffects,
				progress: 20,
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
				title: t('javascript'),
				icon: javascript,
				progress: 70,
			},
			{
				title: t('sass'),
				icon: sass,
				progress: 80,
			},
			{
				title: t('typescript'),
				icon: typescript,
				progress: 50,
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
				progress: 40,
			},
			{
				title: t('postman'),
				icon: postman,
				progress: 55,
			},
			{
				title: t('sql'),
				icon: sql,
				progress: 40,
			},
			{
				title: t('mysql'),
				icon: mysql,
				progress: 60,
			},
			{
				title: t('csharp'),
				icon: csharp,
				progress: 30,
			},
			{
				title: t('java'),
				icon: java,
				progress: 30,
			},
		],
		editors: [
			{
				title: t('visualstudiocode'),
				icon: visualstudiocode,
				progress: 95,
			},
			{
				title: t('visualstudio'),
				icon: visualstudio,
				progress: 70,
			},
		],
		version_control: [
			{
				title: t('git'),
				icon: git,
				progress: 30,
			},
			{
				title: t('github'),
				icon: github,
				progress: 70,
			},
		],
		project_management: [
			{
				title: t('notion'),
				icon: notion,
				progress: 90,
			},
			{
				title: t('azuredevops'),
				icon: azuredevops,
				progress: 50,
			},
			{
				title: t('jira'),
				icon: jira,
				progress: 50,
			},
		],
		others: [
			{
				title: t('wordpress'),
				icon: wordpress,
				progress: 100,
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
