import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import { rhythm } from '../utils/typography';
import * as S from '../styles/index.styles';
import SEO from '../components/Seo/Seo';

import Footer from '../components/Layout/Footer/footer';
import ArticleList from '../components/ArticleList';
import Biography from '../components/Biograph/bio';

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
				<Biography />
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
