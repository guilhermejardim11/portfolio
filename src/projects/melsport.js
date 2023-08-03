import { useTranslation } from 'react-i18next';

import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import ModularBox from '../components/ModularBox/ModularBox';
import ColorBox from '../components/ModularBox/ColorBox';
import SpriteBox from '../components/ModularBox/SpriteBox';

import thumbnail from '../assets/projects/melsport/thumb.jpg';
import fonts from '../assets/projects/melsport/fonts.svg';
import icons from '../assets/projects/melsport/icons.svg';
import VisitProject from '../components/Project/VisitProject';

const details = {
	id: 'melsport',
	title: 'Melsport',
	thumbnail: thumbnail,
	colors: ['#24a191', '#188779'],
	categories: ['website'],
	tags: ['iconography', 'palette'],
	skills: ['html', 'css_scss', 'javascript', 'rest_api', 'wordpress'],
	content: <Content />,
};

export function Content() {
	const [t] = useTranslation();

	return (
		<>
			<Section>
				<img
					src={thumbnail}
					alt='thumbnail'
				/>
			</Section>

			<Section>
				<SectionTitle title={t('project')} />

				<ModularBox>
					<ColorBox palette={['#188779', '#2D3E50', '#1A2430', '#D1A100']} />
				</ModularBox>

				<ModularBox gap={12}>
					<SpriteBox
						sprite={fonts}
						spriteSize={100}
						number={2}
						spriteColumns={2}
						size={100}
						isColorShift
					/>
				</ModularBox>
			</Section>

			<Section background>
				<ModularBox>
					<SpriteBox
						sprite={icons}
						spriteSize={160}
						number={17}
						spriteColumns={5}
						size={32}
						isColorShift
					/>
				</ModularBox>
			</Section>

			<Section
				background
				extend
			>
				<VisitProject
					label={t(`visit.website`)}
					text={'melsport.pt'}
					url={'https://www.melsport.pt/'}
				/>
			</Section>
		</>
	);
}

export default details;
