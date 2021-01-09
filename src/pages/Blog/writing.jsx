import React from 'react';
import { Link, graphql } from 'gatsby';
import { useTheme } from 'styled-components';
import Bio from '../../components/Biograph/bio';
import Layout from '../../components/Layout/layout';
import SEO from '../../components/Seo/Seo';
import { rhythm } from '../../utils/typography';

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
                    }
                }
            }
        }
    }
`;

const Writting = ({ data, location, ...props }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
            <Layout location={location} title={siteTitle}>
                <SEO title="Dheyson Alves - Blog" description="Blog sobre desenvolvimento e Computação"/>
                {/* <Bio /> */}
                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug;
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
                                    to={node.fields.slug}
                                >
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html:
                                        node.frontmatter.description ||
                                        node.excerpt,
                                }}
                            />
                        </div>
                    );
                })}
            </Layout>
    );
};

export default Writting;
