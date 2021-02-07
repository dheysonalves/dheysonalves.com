import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/Seo';
import Footer from '../components/Layout/Footer/footer';
import * as Svg from '../assets/svg/index';

import * as S from '../styles/about.styles';

const About = (props) => {
    return (
        <Layout location={props.location}>
            <SEO title="Sobre"></SEO>
            <S.Container>
                <img src={Svg.default.Cat} width="auto" height="auto" />
                <h2>Ops 😨, essa página ainda não foi escrita.</h2>
                <p>Aguarda um pouco mais 😎 </p>
            </S.Container>
            <Footer />
        </Layout>
    );
};

export default About;
