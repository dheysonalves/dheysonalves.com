import React from 'react';
import { Link, graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

import Layout from '../components/Layout/layout';
import Footer from '../components/Layout/Footer/footer';
import SEO from '../components/Seo/Seo';
import ArticleTagsList from '../components/ArticleList/ArticleCard/ArticleTagsList';
import {
	Heading,
	PostInformation,
	Divider,
	List,
	SectionArticle,
	SocialMediaShare,
} from './styles';
import { rhythm } from '../utils/typography';
import { formatDate, readingTime } from '../utils/misc';

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

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark;
	const siteTitle = data.site.siteMetadata.title;
	const { previous, next } = pageContext;

	return (
		<Layout location={location} title={siteTitle} max={rhythm(28)}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<SectionArticle>
				<SocialMediaShare>
					<div className="s9-widget-wrapper"></div>
				</SocialMediaShare>
				<PostInformation>
					Postado em {formatDate(post.frontmatter.date)} •{' '}
					{readingTime(post.html)} minutos de leitura
				</PostInformation>
				<Heading>{post.frontmatter.title}</Heading>
				<PostInformation>Escrito por Dheyson L. Alves</PostInformation>
				<ArticleTagsList tags={post.frontmatter.tags} />
				<Divider />
				<article dangerouslySetInnerHTML={{ __html: post.html }} />
				<Divider />
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
						url: location.Divideref,
						identifier: post.id,
						title: siteTitle,
						language: 'pt_Br',
					}}
				/>
			</SectionArticle>
			<Footer />
		</Layout>
	);
};

export default BlogPostTemplate;
