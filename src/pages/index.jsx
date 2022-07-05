import React, { useCallback, useContext } from 'react';
import { useTheme } from 'styled-components';
import { Link, graphql } from 'gatsby';
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from 'react-icons/io';
import { FaDev, FaDiscord } from 'react-icons/fa';

import Layout from '../components/Layout/layout';
import Context from '../store/context.store';
import { rhythm } from '../utils/typography';
import * as S from '../styles/index.styles';
import SEO from '../components/Seo/Seo';
import Ship from '../components/Ships/index';

import Avatar from '../assets/img/Avatar.png';

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
	const { state } = useContext(Context);
	const theme = useTheme();

	const checkColor = useCallback(
		(elem) => {
			if (state.isDark) {
				return theme.dark[elem];
			}

			return theme.light[elem];
		},
		[state, theme]
	);

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
							Front-End Developer
						</S.EmphasisParagraph>
						<S.Title>
							<S.EnphasisSpan>
								Ajudando clientes a alcançar seu potencial com
								tecnologia.
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
					{posts.slice(0, 3).map(({ node }) => {
						const title =
							node.frontmatter.title || node.fields.slug;
						const { tags, date, description } = node.frontmatter;
						return (
							<div key={node.fields.slug}>
								<h3
									style={{
										marginBottom: rhythm(1 / 4),
									}}
								>
									<Link
										style={{
											boxShadow: `none`,
											textTransform: 'uppercase',
										}}
										to={'/writing' + node.fields.slug}
									>
										{title}
									</Link>
								</h3>
								{tags.map((item, index) => (
									<Ship
										color={checkColor(item)}
										key={index}
										label={item + ' '}
										radius={false}
									/>
								))}
								<S.DateParagraph>{date}</S.DateParagraph>
								<p
									dangerouslySetInnerHTML={{
										__html: description || node.excerpt,
									}}
								/>
							</div>
						);
					})}
				</S.BlogPostsWrapper>
				<br />© {new Date().getFullYear()}
			</S.Wrapper>
		</Layout>
	);
};

export default Index;
