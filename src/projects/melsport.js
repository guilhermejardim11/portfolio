import { useTranslation } from 'react-i18next';

import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import ModularBox from '../components/ModularBox/ModularBox';
import ColorBox from '../components/ModularBox/ColorBox';
import SpriteBox from '../components/ModularBox/SpriteBox';
import Title from '../components/Project/Elements/Title';
import NumberTitle from '../components/Project/Elements/NumberTitle';

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
		</>
	);
}
