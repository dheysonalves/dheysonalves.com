import React from 'react';
import Layout from '../components/Layout/layout';
import Button from '../components/Button';
import { rhythm, } from '../utils/typography';
import * as S from '../styles/index.styles';
import Svg from '../assets/svg/ellipse.svg';
import SEO from '../components/Seo/Seo';
import Footer from '../components/Layout/Footer/footer';

const Index = ({data}) => {

    return (
        <Layout max={rhythm(100)} mw={true}>
            <SEO title="Dheyson Alves" description="Um desenvolvedor de software, adora programação, às vezes brinca com react e nas horas vagas escreve histórias de RPG." />
            <S.Wrapper>
                <S.ContentCenter>
                    <S.Title>
                        Desenvolvedor de Software, trabalhando para construir{' '}
                        <S.EnphasisText>produtos com qualidade.</S.EnphasisText>
                    </S.Title>
                    {/* <Button text="Me Contate" disabled /> */}
                </S.ContentCenter>
            </S.Wrapper>
            {/* <CardList /> */}
        </Layout>
    );
};

export default Index;
