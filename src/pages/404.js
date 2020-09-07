import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/Seo';

const NotFoundPage = () => {
        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="404: Não encontrado" />
                <h1>Não encontrado</h1>
                <p>Você clicou em uma rota que não existe... uma pena.</p>
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

