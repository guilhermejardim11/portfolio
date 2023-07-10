import { Link } from 'react-router-dom';

import Section from '../../components/Section/Section';
import SectionTitle from '../../components/Section/SectionTitle';

import imoukubo_2 from '../../assets/projects/imoukubo/imoukubo_2.jpg';
import imoukubo_3 from '../../assets/projects/imoukubo/imoukubo_3.jpg';
import imoukubo_4 from '../../assets/projects/imoukubo/imoukubo_4.jpg';
import imoukubo_5 from '../../assets/projects/imoukubo/imoukubo_5.jpg';
import VisitProject from '../../components/Project/VisitProject';

const Page_imoukubo = () => {
	return (
		<>
			<Section>
				<SectionTitle title='Project' />
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

				<SectionTitle title='concept' />
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
					<br />
					Para cor secundária escolheu-se o índigo, para contrastar
					com a principal.
				</p>
			</Section>

			<Section background pattern>
				<SectionTitle title='Skills' />
			</Section>

			<Section background>
				<VisitProject
					type='website'
					url='https://www.imoukubo.com/'
					text='imoukubo.com'
				/>
			</Section>
		</>
	);
};

export default Page_imoukubo;
