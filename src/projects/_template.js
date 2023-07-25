import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';

import Section from '../components/Section/Section';
import SectionTitle from '../components/Section/SectionTitle';
import VisitProject from '../components/Project/VisitProject';
import ModularBox from '../components/Project/Modules/ModularBox';
import Color from '../components/Project/Modules/Color';
import Image from '../components/Project/Modules/Image';

import thumbnail from '../assets/projects/imoukubo/thumb.jpg';
import imoukubo_2 from '../assets/projects/imoukubo/imoukubo_2.jpg';
import imoukubo_3 from '../assets/projects/imoukubo/imoukubo_3.jpg';
import imoukubo_4 from '../assets/projects/imoukubo/imoukubo_4.jpg';
import imoukubo_5 from '../assets/projects/imoukubo/imoukubo_5.jpg';
import logo_0 from '../assets/projects/imoukubo/logo_0.svg';
import logo_1 from '../assets/projects/imoukubo/logo_1.svg';
import logo_2 from '../assets/projects/imoukubo/logo_2.svg';
import icon_0 from '../assets/projects/imoukubo/apartamento.svg';
import icon_1 from '../assets/projects/imoukubo/comercio.svg';
import icon_2 from '../assets/projects/imoukubo/moradia.svg';
import icon_3 from '../assets/projects/imoukubo/terreno.svg';
import font_0 from '../assets/projects/imoukubo/font_0.svg';
import font_1 from '../assets/projects/imoukubo/font_1.svg';

const colors = ['#FF8020', '#FE6E01'];
const palette = ['#FE6E01', '#2F3543', '#647697', '#FFFFFF'];
const icons = [icon_0, icon_1, icon_2, icon_3];
const fonts = [font_0, font_1];

export function Content() {
	const [t] = useTranslation();
	const themeContext = useContext(ThemeContext);

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
				<ModularBox>
					{palette.map((color, index) => (
						<Color key={index} color={color} />
					))}
				</ModularBox>
				<p>
					Para cor secundária escolheu-se o índigo, para contrastar
					com a principal.
				</p>
				<ModularBox>
					{icons.map((item, index) => (
						<Image key={index} src={item} size={40} colorShift />
					))}
				</ModularBox>
				<p>
					Para cor secundária escolheu-se o índigo, para contrastar
					com a principal.
				</p>
				<ModularBox gap={28}>
					{fonts.map((item, index) => (
						<Image key={index} src={item} size={90} colorShift />
					))}
				</ModularBox>
				<p>
					O logótipo criado foi inspirado na marca UKUBO GROUP, onde o
					laranja assume a posição de cor principal, por ser
					representativa da área imobiliária do grupo empresarial.
				</p>
				<ModularBox gap={12} vertical>
					<Image src={themeContext.isDarkMode ? logo_1 : logo_0} />
					<Image src={logo_2} colorShift />
				</ModularBox>
				<p>
					O logótipo criado foi inspirado na marca UKUBO GROUP, onde o
					laranja assume a posição de cor principal, por ser
					representativa da área imobiliária do grupo empresarial.
				</p>
				<p>
					O logótipo criado foi inspirado na marca UKUBO GROUP, onde o
					laranja assume a posição de cor principal, por ser
					representativa da área imobiliária do grupo empresarial.
				</p>
			</Section>
		</>
	);
}

const details = { Content, colors, thumbnail };
export default details;
