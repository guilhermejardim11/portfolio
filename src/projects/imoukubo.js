import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';

import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import Title from '../components/Project/Elements/Title';
import NumberTitle from '../components/Project/Elements/NumberTitle';
import ModularBox from '../components/ModularBox/ModularBox';
import Image from '../components/ModularBox/Modules/Image';
import ColorModule from '../components/ModularBox/ColorBox';
import SpriteBox from '../components/ModularBox/SpriteBox';

import thumbnail from '../assets/projects/imoukubo/thumb.jpg';
import logo_0 from '../assets/projects/imoukubo/logo_0.svg';
import logo_1 from '../assets/projects/imoukubo/logo_1.svg';
import logo_2 from '../assets/projects/imoukubo/logo_2.svg';
import icons from '../assets/projects/imoukubo/icons.svg';
import fonts from '../assets/projects/imoukubo/fonts.svg';

export default {
	id: 'imoukubo',
	title: 'imoukubo',
	type: 'website',
	tags: ['Brand Identity', 'UX/UI', 'Development'],
	date: new Date(Date.UTC(2012, 11, 20)),
	thumbnail: thumbnail,
	colors: ['#FF8020', '#FE6E01'],
	skills: {
		new: [],
		improved: [],
	},
	visit: ['imoukubo.com', 'https://www.imoukubo.com/'],
	content: <Content />,
};

const palette = ['#FE6E01', '#2F3543', '#647697', '#FFFFFF'];

export function Content() {
	const [t] = useTranslation();
	const themeContext = useContext(ThemeContext);

	return (
		<>
			<Section>
				<Title
					level={2}
					title={t('UX Process')}
				/>

				<NumberTitle
					level={3}
					title={t('Strategy')}
					index={1}
				/>
				<p>At first, imoukubo wasn’t even called like that, it was just a simple online real estate search platform, which was not up to date with the latest properties UKUBO had.</p>
				<p>The focus of this project was to give the users the access to all the information about a property.</p>
			</Section>

			<Section>
				<SectionTitle title={t('project')} />
			</Section>

			<Section>
				<Title
					level={2}
					title={t('UX Process')}
				/>
				<Title
					level={3}
					title={t('UX Process')}
				/>
				<Title
					level={4}
					title={t('UX Process')}
				/>
				<Title
					level={5}
					title={t('UX Process')}
				/>
				<Title
					level={6}
					title={t('UX Process')}
				/>
			</Section>

			<Section>
				<Title
					level={2}
					title={t('UX Process')}
					pos='center'
				/>
				<Title
					level={3}
					title={t('UX Process')}
					pos='center'
				/>
				<Title
					level={4}
					title={t('UX Process')}
					pos='center'
				/>
				<Title
					level={5}
					title={t('UX Process')}
					pos='center'
				/>
				<Title
					level={6}
					title={t('UX Process')}
					pos='center'
				/>
			</Section>

			<Section>
				<Title
					level={2}
					title={t('UX Process')}
					pos='right'
				/>
				<Title
					level={3}
					title={t('UX Process')}
					pos='right'
				/>
				<Title
					level={4}
					title={t('UX Process')}
					pos='right'
				/>
				<Title
					level={5}
					title={t('UX Process')}
					pos='right'
				/>
				<Title
					level={6}
					title={t('UX Process')}
					pos='right'
				/>
			</Section>

			<Section>
				<NumberTitle
					level={2}
					title={t('Strategy')}
					index={1}
				/>
				<NumberTitle
					level={3}
					title={t('Strategy')}
					index={2}
				/>
				<NumberTitle
					level={4}
					title={t('Strategy')}
					index={3}
				/>
				<NumberTitle
					level={5}
					title={t('Strategy')}
					index={4}
				/>
				<NumberTitle
					level={6}
					title={t('Strategy')}
					index={5}
				/>
			</Section>

			<Section>
				<NumberTitle
					level={2}
					title={t('Strategy')}
					index={1}
					pos='center'
				/>
				<NumberTitle
					level={3}
					title={t('Strategy')}
					index={2}
					pos='center'
				/>
				<NumberTitle
					level={4}
					title={t('Strategy')}
					index={3}
					pos='center'
				/>
				<NumberTitle
					level={5}
					title={t('Strategy')}
					index={4}
					pos='center'
				/>
				<NumberTitle
					level={6}
					title={t('Strategy')}
					index={5}
					pos='center'
				/>
			</Section>

			<Section>
				<NumberTitle
					level={2}
					title={t('Strategy')}
					index={1}
					pos='right'
				/>
				<NumberTitle
					level={3}
					title={t('Strategy')}
					index={2}
					pos='right'
				/>
				<NumberTitle
					level={4}
					title={t('Strategy')}
					index={3}
					pos='right'
				/>
				<NumberTitle
					level={5}
					title={t('Strategy')}
					index={4}
					pos='right'
				/>
				<NumberTitle
					level={6}
					title={t('Strategy')}
					index={5}
					pos='right'
				/>
			</Section>

			<Section>
				<ModularBox
					gap={12}
					vertical
				>
					<Image src={themeContext.isDarkMode ? logo_1 : logo_0} />
					<Image
						src={logo_2}
						colorShift
					/>
				</ModularBox>

				<ModularBox gap={28}>
					<SpriteBox
						sprite={fonts}
						spriteSize={100}
						number={2}
						spriteColumns={2}
						size={100}
						isColorShift
					/>
				</ModularBox>

				<ModularBox>
					<ColorModule palette={palette} />
				</ModularBox>

				<ModularBox>
					<SpriteBox
						sprite={icons}
						spriteSize={100}
						number={4}
						spriteColumns={2}
						size={40}
						isColorShift
					/>
				</ModularBox>
			</Section>
		</>
	);
}
