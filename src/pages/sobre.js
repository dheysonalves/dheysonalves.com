import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';

export default props => (
    <Layout location={props.location}>
        <SEO title="Sobre"></SEO>
        <div>
            <h2>Sobre mim</h2>
            <p>
                Estudante de Ciência da Computação na UNIFAVIP. Front-end
                developer.
            </p>
        </div>
    </Layout>
);
