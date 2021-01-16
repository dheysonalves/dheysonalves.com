import React from 'react';
import Layout from '../components/Layout/layout';
import Button from '../components/Button';
import { rhythm, } from '../utils/typography';
import * as S from '../styles/index.styles';
import Svg from '../assets/svg/ellipse.svg';
import SEO from '../components/Seo/Seo';
import Footer from '../components/Layout/Footer/footer';

import Avatar from '../assets/img/Avatar.png';

const Index = ({data}) => {

    return (
        <Layout max={rhythm(100)} mw={true}>
            <SEO title="Dheyson Alves" description="Um desenvolvedor de software, adora programação, às vezes brinca com react e nas horas vagas escreve histórias de RPG." />
            <S.Wrapper>
                <S.ContentCenter>
                    <S.Avatar src={Avatar} width="250px" height="auto" alt="Uma imagem de avatar" />
                    <div>
                        <S.EmphasisParagraph>Study. Build. Improve. Repeat.</S.EmphasisParagraph>
                        <S.Title>
                            <S.EnphasisSpan>Trabalhando para construir ótimos produtos com qualidade.</S.EnphasisSpan>
                            {/* <S.EnphasisText>#RPG Tabletop Master;</S.EnphasisText>
                        <S.EnphasisText>#PC gaming player;</S.EnphasisText> */}
                        </S.Title>
                    </div>

                    {/* <Button text="Me Contate" disabled /> */}
                </S.ContentCenter>
                <br/>
            </S.Wrapper>
            {/* <CardList /> */}
        </Layout>
    );
};

export default Index;
