import { useTranslation } from 'react-i18next';

import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import ModularBox from '../components/ModularBox/ModularBox';
import ColorBox from '../components/ModularBox/ColorBox';
import SpriteBox from '../components/ModularBox/SpriteBox';

import thumbnail from '../assets/projects/melsport/thumb.jpg';
import fonts from '../assets/projects/melsport/fonts.svg';
import icons from '../assets/projects/melsport/icons.svg';

export default {
	id: 'melsport',
	title: 'Melsport',
	type: 'website',
	tags: ['UX/UI', 'Development'],
	date: new Date(Date.UTC(2019, 4, 24)),
	thumbnail: thumbnail,
	colors: ['#24a191', '#188779'],
	skills: {
		new: [],
		improved: [],
	},
	visit: ['melsport.pt', 'https://www.melsport.pt/'],
	content: <Content />,
};

const palette = ['#188779', '#2D3E50', '#1A2430', '#D1A100'];

export function Content() {
	const [t] = useTranslation();

	return (
		<>
			<Section>
				<SectionTitle title={t('project')} />

				<ModularBox>
					<ColorBox palette={palette} />
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
		</>
	);
}
