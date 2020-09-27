import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from "react-i18next";

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/Seo';
import * as Svg from '../assets/svg/index';
import Context from '../store/context.store';
// https://github.com/i18next/react-i18next/blob/master/example/react/public/locales/en/translation.json
const NotFoundPage = ({ data, location }) => {
    const { state } = useContext(Context);
    const siteTitle = data.site.siteMetadata.title;
    const { t, i18n  } = useTranslation();
    return (
        <Layout location={location} title={siteTitle}>
            <SEO title={t("404: Error Page")} description={t("A error page who could find the request")} />
            <div style={{ textAlign: 'center' }}>
            <img src={state.isDark ? Svg.default.Cat : Svg.default.Searcher} width="auto" height="auto" />
                <h1>{t("Oh no! Something is wrong...")}</h1>
                <p>{t("You have clicked in a route which doesn't exist... what a pity.")}</p>
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

