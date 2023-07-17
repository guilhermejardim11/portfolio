import { useTranslation } from 'react-i18next';

import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import VisitProject from '../components/Project/VisitProject';

import thumbnail from '../assets/projects/imoukubo/thumb.jpg';
import imoukubo_2 from '../assets/projects/imoukubo/imoukubo_2.jpg';
import imoukubo_3 from '../assets/projects/imoukubo/imoukubo_3.jpg';
import imoukubo_4 from '../assets/projects/imoukubo/imoukubo_4.jpg';
import imoukubo_5 from '../assets/projects/imoukubo/imoukubo_5.jpg';

const colors = ['#FE6E01', '#2F3543', '#FFFFFF'];
const color = colors[0];
const icons = ['', '', '', ''];

export function Content() {
	const [t] = useTranslation();

	return (
		<>
			<Section>
				<SectionTitle title={t('project')} />
				<p>
					A imoukubo é uma plataforma de pesquisa de imóveis e
					consulta de informação sobre os mesmos, da UKUBO GROUP.
				</p>
				<img src={imoukubo_2} alt='imoukubo_2' />
				<p>
					Neste projeto criou-se uma identidade própria e
					desenvolveu-se um novo portal imobiliário.
				</p>
				<img src={imoukubo_4} alt='imoukubo_4' />
				<p>
					O grande desafio prendeu-se com a organização da informação
					e o desenvolvimento de um website user-friendly
				</p>
				<img src={imoukubo_5} alt='imoukubo_5' />

				<SectionTitle title={t('concept')} />
				<p>
					Idealizou-se um website primando pela simplicidade e a
					facilidade de acesso à informação dos imóveis, com
					apontamentos de diferenciação.
				</p>
				<img src={imoukubo_3} alt='imoukubo_3' />
				<p>
					O logótipo criado foi inspirado na marca UKUBO GROUP, onde o
					laranja assume a posição de cor principal, por ser
					representativa da área imobiliária do grupo empresarial.
				</p>
				<p>
					Para cor secundária escolheu-se o índigo, para contrastar
					com a principal.
				</p>
			</Section>

			<Section background pattern>
				<SectionTitle title={t('skills')} />
			</Section>

			<Section background>
				<VisitProject
					label={t('visit.website')}
					text='imoukubo.com'
					url='https://www.imoukubo.com/'
				/>
			</Section>

			{/* <ModularBox columns={3} spacing={28}>
				{colors.map((color) => (
					<Color color={color} />
				))}
			</ModularBox>

			<ModularBox columns={4} spacing={28}>
				{icons.map((icon) => (
					<Icon src={icon} />
				))}
			</ModularBox> */}
		</>
	);
}

export default { Content, color, thumbnail };
