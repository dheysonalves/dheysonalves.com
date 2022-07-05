import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/Seo';
import Footer from '../components/Layout/Footer/footer';
import * as Svg from '../assets/svg/index';
import { rhythm } from '../utils/typography';

import * as S from '../styles/about.styles';

const About = (props) => {
	return (
		<Layout location={props.location} max={rhythm(28)}>
			<SEO title="Sobre"></SEO>
			<S.Container>
				<img src={Svg.default.Cat} width="300px" height="auto" />
				<div>
					<h2>Olá, sou Dheyson L. Alves 🖐🏽</h2>
					<p>
						Engenheiro de Software com 3 anos de experiência
						na indústria. Ajudando empresas de diferentes origens a
						atingir seu potencial com aplicativos de software.
					</p>
					<p>
						Além disso, criei com estudantes universitários uma
						comunidade de desenvolvedores chamada CofferHub. Foco em
						ensinar e aprender juntos. Fico entusiasmado com as
						oportunidades em que posso trabalhar com produtos que
						impactam muitas pessoas. Além disso, trabalhar com uma
						equipe com uma mentalidade de crescimento e aprendizado.
					</p>
				</div>
			</S.Container>

			<Footer />
		</Layout>
	);
};

export default About;
