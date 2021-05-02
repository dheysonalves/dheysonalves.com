import React, { useCallback, useContext, useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/Seo';
import Footer from '../components/Layout/Footer/footer';
import { rhythm } from '../utils/typography';
import Card from '../components/Card';
import * as S from '../styles/portfolio.styles';

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

const Portfolio = () => {
    const [data, setData] = useState(null);
    const [loading, setloading] = useState(true);

    const fetchData = useCallback(async () => {
        const url = 'https://api.github.com/users/dheysonalves/repos';
        setloading(true);

        return await fetch(url)
            .then(async (response) => {
                if (response.ok) {
                    let json = await response.json();
                    setData(json);
                }
            })
            .catch((error) => {
                console.log('something went wrong', error);
            })
            .finally(() => {
                setloading(false);
            });
    }, []);

    const getMajorRepositories = () => {
        const filtered = data?.sort(function (memberA, memberB) {
            if (new Date(memberA.updated_at) > new Date(memberB.updated_at)) {
                return -1;
            }
            if (new Date(memberA.updated_at) < new Date(memberB.updated_at)) {
                return 1;
            }
            return 0;
        });

        console.log(filtered?.slice(0, 2));

        return filtered?.slice(0, 2).map((item, index) => (
            <>
                <Card
                    key={index}
                    subtitle={item.description}
                    title={item.name}
                    margin={1}
                    width="400px"
                    github={item.homepage}
                />
            </>
        ));
    };

    const getMinorRepositories = () => {
        const filtered = data.sort(function (memberA, memberB) {
            if (new Date(memberA.updated_at) > new Date(memberB.updated_at)) {
                return -1;
            }
            if (new Date(memberA.updated_at) < new Date(memberB.updated_at)) {
                return 1;
            }
            return 0;
        });

        console.log(filtered.slice(2, 6));

        return filtered.slice(2, 5).map((item, index) => (
            <>
                <Card
                    key={index}
                    subtitle={item.description}
                    title={item.name}
                    margin={1}
                    width="400px"
                    github={item.homepage}
                />
            </>
        ));
    };

    useEffect(() => {
        let mounted = true;
        fetchData().then(() => {
            if (mounted) {
                setloading(false);
            }
        });
        return function cleanup() {
            mounted = false;
        };
    }, [fetchData]);

    return (
        <Layout max={rhythm(28)}>
            <SEO
                title="Dheyson Alves"
                description="Um desenvolvedor de software, adora programação, às vezes brinca com react e nas horas vagas escreve histórias de RPG."
            />
            {loading ? (
                <p>Loading</p>
            ) : (
                <>
                    <S.Container>{getMajorRepositories()}</S.Container>
                    <S.Container>{getMinorRepositories()}</S.Container>
                </>
            )}

            <Footer />
        </Layout>
    );
};

export default Portfolio;
