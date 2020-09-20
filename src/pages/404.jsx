import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/Seo';
import * as Svg from '../assets/svg/index';
import Context from '../store/context.store';

const NotFoundPage = ({ data, location }) => {
    const { state } = useContext(Context);
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="404: Error Page" description="A error page who could find the request" />
            <div style={{ textAlign: 'center' }}>
            <img src={state.isDark ? Svg.default.Cat : Svg.default.Searcher} width="auto" height="auto" />
                <h1>Oh no! Something is wrong...</h1>
                <p>You have clicked in a route which doesn't exist... what a pity.</p>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

export default NotFoundPage;

