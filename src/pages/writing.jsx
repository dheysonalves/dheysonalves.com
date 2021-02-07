import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout/layout';
import Footer from '../components/Layout/Footer/footer';
import SEO from '../components/Seo/Seo';
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
                    }
                }
            }
        }
    }
`;

const Writting = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

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
            <Footer />
        </Layout>
    );
};

export default Writting;
