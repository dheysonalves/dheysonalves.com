/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    charSet: `utf-8`
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `viewport`,
                    content: `width=device-width, initial-scale=1.0`,
                },
                {
                    name: `keywords`,
                    content: `developer, desenvolvedor, software, software developer, desenvolvedor de software, front-end enginner, dheyson alves, dheyson desenvolvedor, landing page, website, caruaru website, caruaru desenvolvedor, javascript, typescript, reactjs, react native, react, storybook, styled components, css, ciencia da computação, computação, blog`,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: `@DheysonAlves2`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:site`,
                    content: `@DheysonAlves2`,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: `A software developer website, loves programming, sometimes plays with react and in the free time write RPG stories.`,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO;
