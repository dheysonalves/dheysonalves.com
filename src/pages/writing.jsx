import React, { useCallback, useContext } from 'react';
import { Link, graphql } from 'gatsby';
import { useTheme } from 'styled-components';
import Layout from '../components/Layout/layout';
import Footer from '../components/Layout/Footer/footer';
import SEO from '../components/Seo/Seo';
import Ship from '../components/Ships/index';
import Context from '../store/context.store';
import { rhythm } from '../utils/typography';

import * as S from '../styles/Blog.styled';

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

const Writting = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;
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
		<Layout location={location} title={siteTitle} max={rhythm(28)}>
			<SEO
				title="Dheyson Alves - Blog"
				description="Blog sobre desenvolvimento e Computação"
			/>
			<S.BlogPostsWrapper>
				<S.EmphasisParagraph>
					Todas as publicações 📝
				</S.EmphasisParagraph>
			</S.BlogPostsWrapper>
			<hr />
			{posts.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug;
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
			<Footer />
		</Layout>
	);
};

export default Writting;
