import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

import * as S from './styles';

export default props => (
    <Layout location={props.location}>
        <SEO title="Sobre"></SEO>
        <S.Container>
            <h2>Sobre mim</h2>
            <p>
                Estudante de Ciência da Computação na UNIFAVIP. Front-end
                developer.
            </p>
        </S.Container>
    </Layout>
);
