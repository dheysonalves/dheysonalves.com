import React from 'react';
import { graphql } from 'gatsby';
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from 'react-icons/io';
import { FaDev, FaDiscord } from 'react-icons/fa';

import Layout from '../components/Layout/layout';
import { rhythm } from '../utils/typography';
import * as S from '../styles/index.styles';
import SEO from '../components/Seo/Seo';

import Avatar from '../assets/img/Avatar.png';
import Footer from '../components/Layout/Footer/footer';
import ArticleList from '../components/ArticleList';

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
						tags
					}
				}
			}
		}
	}
`;

const Index = ({ data }) => {
	const posts = data.allMarkdownRemark.edges;

	return (
		<Layout max={rhythm(100)} mw={true}>
			<SEO
				title="Dheyson Alves"
				description="Engenheiro de Software com mais de 3 anos de experiência na indústria. Ajudando empresas de diferentes nichos a atingir seu potencial com aplicativos de software."
			/>
			<S.Wrapper>
				<S.ContentCenter>
					<S.Avatar
						src={Avatar}
						width="250px"
						height="auto"
						alt="Uma imagem de avatar"
					/>
					<div>
						<S.IconsWrapper>
							<a
								href="https://www.linkedin.com/in/dheysonalvess/"
								target="_blank"
								rel="noopener noreferrer"
								alt="Logo do Linkedin rede social"
								title="Minha rede profissional"
							>
								<IoLogoLinkedin size="2em" />
							</a>
							<a
								href="https://twitter.com/dheysonlalves"
								target="_blank"
								rel="noopener noreferrer"
								className="anchor__specific"
								alt="Logo do passado com cor branca do twitter"
								title="Quer trocar uma ideia?, manda dm"
							>
								<IoLogoTwitter size="2em" />{' '}
							</a>
							<a
								href="https://github.com/dheysonalves"
								target="_blank"
								rel="noopener noreferrer"
								className="anchor__specific"
								alt="social media"
								title="Boa parte dos meus projetos"
							>
								<IoLogoGithub size="2em" />{' '}
							</a>
							<a
								href="https://dev.to/dheyson_alvess"
								target="_blank"
								rel="noopener noreferrer"
								className="anchor__specific"
								alt="Logo quadrada com fundo preto com texto DEV no meio de cor branca"
								title="Meus outros artigos em inglês"
							>
								<FaDev size="2em" />{' '}
							</a>
							<a
								href="https://discord.gg/Fzk2PBB"
								target="_blank"
								rel="noopener noreferrer"
								className="anchor__specific"
								alt="Logo quadrada com fundo preto com texto DEV no meio de cor branca"
								title="Comunidade do discord da Coffer"
							>
								<FaDiscord size="1.9em" />{' '}
							</a>
						</S.IconsWrapper>
						<S.EmphasisParagraph>
							Front-End Engineer 👨🏽‍💻
						</S.EmphasisParagraph>
						<S.Title>
							<S.EnphasisSpan>
								Codando. Escrevendo. Aprendendo. Ensinando.
								#CSS, #Javascript, #Typescript, #React e
								Front-End no geral.
							</S.EnphasisSpan>
						</S.Title>
					</div>
				</S.ContentCenter>
				<hr />
				<S.Divider />
				<S.BlogPostsWrapper>
					<S.EmphasisParagraph>
						Últimas publicações 📝
					</S.EmphasisParagraph>
					<ArticleList posts={posts.slice(0, 3)} />
				</S.BlogPostsWrapper>
				<Footer />
			</S.Wrapper>
		</Layout>
	);
};

export default Index;
