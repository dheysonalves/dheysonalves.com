/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../../utils/typography';
import * as S from './styles.js';

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            avatar: file(absolutePath: { regex: "/avatar6.png/" }) {
                childImageSharp {
                    fixed(width: 50, height: 50) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            site {
                siteMetadata {
                    author
                    social {
                        twitter
                    }
                }
            }
        }
    `);

    const { author, social } = data.site.siteMetadata;
    return (
        <S.Wrapper>
            <S.Title>
            Software developer and computer science student.
            </S.Title>
            <S.Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda accusamus enim voluptatem, illo dolore, voluptate nihil excepturi, aut facilis consequatur facere perspiciatis obcaecati exercitationem ad eaque consequuntur sapiente ullam! Harum!
            </S.Paragraph>
        </S.Wrapper>
    );
};

export default Bio;
