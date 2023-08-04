import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';

import Section from '../components/Section/Section';
import Title from '../components/Project/Elements/Title';
import NumberTitle from '../components/Project/Elements/NumberTitle';
import VisitProject from '../components/Project/VisitProject';
import ModularBox from '../components/ModularBox/ModularBox';
import ColorBox from '../components/ModularBox/ColorBox';
import SpriteBox from '../components/ModularBox/SpriteBox';
import Image from '../components/ModularBox/Modules/Image';

import thumbnail from '../assets/projects/imoukubo/thumb.jpg';
import logo_0 from '../assets/projects/imoukubo/logo_0.svg';
import logo_1 from '../assets/projects/imoukubo/logo_1.svg';
import logo_2 from '../assets/projects/imoukubo/logo_2.svg';
import icons from '../assets/projects/imoukubo/icons.svg';
import fonts from '../assets/projects/imoukubo/fonts.svg';

const details = {
	id: 'imoukubo',
	title: 'imoukubo',
	thumbnail: thumbnail,
	colors: ['#FF8020', '#FE6E01'],
	categories: ['branding', 'website'],
	tags: ['iconography', 'palette', 'branding'],
	skills: ['html', 'css_scss', 'javascript', 'rest_api', 'wordpress'],
	content: <Content />,
};

export function Content() {
	const [t] = useTranslation();
	const themeContext = useContext(ThemeContext);

	return (
		<>
			<Section>
				<img
					src={thumbnail}
					alt='thumbnail'
				/>
			</Section>

			<Section>
				<Title
					level={2}
					title={t('UX Process')}
					pos='center'
				/>

				<NumberTitle
					level={3}
					title={t('Strategy')}
					index={1}
				/>
				<p>At first, imoukubo wasn't even called like that, it was just a simple online real estate search platform, which was not up to date with the latest properties UKUBO had.</p>
				<p>The focus of this project was to give the users the access to all the information about a property.</p>
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
					<ColorBox palette={['#FE6E01', '#2F3543', '#647697', '#FFFFFF']} />
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

			{/* <Section>
				<SectionTitle title={t('skills')} />
				<Skills skills={project.skills} />
			</Section> */}

			<Section
				background
				extend
			>
				<VisitProject
					label={t(`visit.website`)}
					text={'imoukubo.com'}
					url={'https://www.imoukubo.com/'}
				/>
			</Section>
		</>
	);
}

export default details;
