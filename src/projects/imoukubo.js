import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';

import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import ModularBox from '../components/ModularBox/ModularBox';
import Image from '../components/ModularBox/Modules/Image';
import ImageBox from '../components/ModularBox/ImageBox';
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
				<SectionTitle title={t('project')} />

				<ModularBox gap={12} vertical>
					<Image src={themeContext.isDarkMode ? logo_1 : logo_0} />
					<Image src={logo_2} colorShift />
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
