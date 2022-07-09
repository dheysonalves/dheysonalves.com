import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/Seo';
import * as Svg from '../assets/svg/index';
import { rhythm } from '../utils/typography';

import * as S from '../styles/about.styles';

export const pageQuery = graphql`
	query($language: String!) {
		site {
			siteMetadata {
				title
			}
		}
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;

const About = (props) => {
	const { t } = useTranslation();

	return (
		<Layout location={props.location} max={rhythm(28)}>
			<SEO
				title={t('Dheyson L. Alves - Sobre')}
				description={t(
					'Engenheiro de Software com mais de 3 anos de experiência na indústria. Ajudando empresas de diferentes nichos a atingir seu potencial com aplicativos de software.'
				)}
			></SEO>
			<S.Container>
				<img src={Svg.default.Cat} width="300px" height="auto" />
				<div>
					<S.Title>{t('Olá, sou Dheyson L. Alves')} 🖐🏽</S.Title>
					<p>
						{t(
							'Engenheiro de Software com 3 anos de experiência na indústria. Ajudando empresas de diferentes origens aatingir seu potencial com aplicativos de software.'
						)}
					</p>
					<p>
						{t(
							'Além disso, criei com estudantes universitários uma comunidade de desenvolvedores chamada CofferHub. Foco em ensinar e aprender juntos. Fico entusiasmado com as oportunidades em que posso trabalhar com produtos que impactam muitas pessoas. Além disso, trabalhar com uma equipe com uma mentalidade de crescimento e aprendizado.'
						)}
					</p>
				</div>
			</S.Container>
		</Layout>
	);
};

export default About;
