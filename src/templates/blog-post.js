import React, { useCallback, useContext } from 'react';
import { Link, graphql } from 'gatsby';
import { useTheme } from 'styled-components';
import Layout from '../components/Layout/layout';
import Footer from '../components/Layout/Footer/footer';
import SEO from '../components/Seo/Seo';
import Ship from '../components/Ships/index';
import Context from '../store/context.store';
import { Heading, Paragraph, Hr, List } from './styles';
import { DiscussionEmbed } from 'disqus-react';

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark;
	const siteTitle = data.site.siteMetadata.title;
	const { previous, next } = pageContext;
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
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<section>
				<Heading>{post.frontmatter.title}</Heading>
				<br />
				{post.frontmatter.tags.map((item, index) => (
					<Ship
						color={checkColor(item)}
						key={index}
						label={item + ' '}
						radius={false}
					/>
				))}
				<Paragraph>{post.frontmatter.date}</Paragraph>
				<div className="s9-widget-wrapper"></div>
				<br />
				<article dangerouslySetInnerHTML={{ __html: post.html }} />
				<Hr />
				<List>
					<li>
						{previous && (
							<Link
								to={'/writing' + previous.fields.slug}
								rel="prev"
							>
								← {previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={'/writing' + next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</Link>
						)}
					</li>
				</List>
				<DiscussionEmbed
					shortname="dheysonalves-cs"
					config={{
						url: location.href,
						identifier: post.id,
						title: siteTitle,
						language: 'pt_Br',
					}}
				/>
			</section>
			<Footer />
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
				description
				charSet
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			timeToRead
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
				tags
				# featuredImage {
				#   childImageSharp {
				#     fluid(maxWidth: 800) {
				#       ...GatsbyImageSharpFluid
				#     }
				#   }
				# }
			}
		}
	}
`;
