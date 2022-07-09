import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '../components/Layout/layout';
import { rhythm } from '../utils/typography';
import * as S from '../styles/index.styles';
import SEO from '../components/Seo/Seo';

import ArticleList from '../components/ArticleList';
import Biography from '../components/Biograph/bio';

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
	const { t } = useTranslation();

	return (
		<Layout max={rhythm(100)} mw={true}>
			<SEO
				title="Dheyson L. Alves - Home"
				description={t(
					'Engenheiro de Software com mais de 3 anos de experiência na indústria. Ajudando empresas de diferentes nichos a atingir seu potencial com aplicativos de software.'
				)}
			/>
			<S.Wrapper>
				<Biography />
				<S.Divider />
				<S.BlogPostsWrapper>
					<S.EmphasisParagraph>
						{t('Últimas publicações')} 📝
					</S.EmphasisParagraph>
					<ArticleList posts={posts.slice(0, 3)} />
				</S.BlogPostsWrapper>
			</S.Wrapper>
		</Layout>
	);
};

export default Index;
