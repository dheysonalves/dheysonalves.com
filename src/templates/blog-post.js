import React, { useContext } from 'react';
import { Link, graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import { useTranslation, I18nextContext } from 'gatsby-plugin-react-i18next';

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/Seo';
import ArticleTagsList from '../components/ArticleTagsList';
import {
	Heading,
	PostInformation,
	Divider,
	List,
	SectionArticle,
	SocialMediaShare,
	ArticleContent,
} from './styles';
import { rhythm } from '../utils/typography';
import { formatDate, readingTime } from '../utils/misc';

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!, $language: String!) {
		site {
			siteMetadata {
				title
				author
				description
				charSet
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
	const { t } = useTranslation();
	const { language } = useContext(I18nextContext);

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
					{t('Postado em')}{' '}
					{language === 'pt'
						? formatDate(post.frontmatter.date)
						: post.frontmatter.date}{' '}
					• {readingTime(post.html)} {t('minutos de leitura')}
				</PostInformation>
				<Heading>{post.frontmatter.title}</Heading>
				<PostInformation>
					{t('Escrito por')} Dheyson L. Alves
				</PostInformation>
				<ArticleTagsList tags={post.frontmatter.tags} />
				<Divider />
				<ArticleContent
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
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
		</Layout>
	);
};

export default BlogPostTemplate;
