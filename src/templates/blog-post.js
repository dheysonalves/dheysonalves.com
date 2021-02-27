import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import Footer from '../components/Layout/Footer/footer';
import SEO from '../components/Seo/Seo';
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
                <section>
                    <Heading>{post.frontmatter.title}</Heading>
                    <br />
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
                                <Link
                                    to={'/writing' + next.fields.slug}
                                    rel="next"
                                >
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
                </section>
                <Footer />
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
