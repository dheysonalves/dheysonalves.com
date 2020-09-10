import React from 'react';
import Layout from '../../components/Layout/layout';
import SEO from '../../components/Seo/Seo';

import * as S from '../../styles/about.styles';

const About = ((props) => {
    return (
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
    )
})

export default About;
