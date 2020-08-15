import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Biograph/bio';
import Layout from '../components/layout';
import SEO from '../components/Seo/Seo';
// import { rhythm, scale } from "../utils/typography"
import { Heading, Paragraph, Hr, List } from './styles';

import { DiscussionEmbed } from 'disqus-react';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;
        const { previous, next } = this.props.pageContext;
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <Heading>{post.frontmatter.title}</Heading>
                <Paragraph>{post.frontmatter.date}</Paragraph>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <Hr />
                <Bio />

                <List>
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel="prev">
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel="next">
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </List>
                <DiscussionEmbed
                    shortname="dheysonalves-cs"
                    config={{
                        url: this.props.location.href,
                        identifier: post.id,
                        title: siteTitle,
                        language: 'pt_Br',
                    }}
                />
            </Layout>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;
