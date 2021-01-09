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
                    <S.Avatar src={Avatar} width="250" height="auto" alt="Uma imagem de avatar" />
                    <S.Title>
                        <S.EnphasisText>#Software developer 👨🏽‍💻;</S.EnphasisText>
                        <S.EnphasisText>#RPG Tabletop Master ⚔️;</S.EnphasisText>
                        <S.EnphasisText>#PC gaming player 🎮;</S.EnphasisText>
                    </S.Title>
                    {/* <Button text="Me Contate" disabled /> */}
                </S.ContentCenter>
                <br/>
                <S.SmallDescription>
                    <b>adora criar e projetar histórias de fantasia para minhas aventuras de rpg..💬</b>
                </S.SmallDescription>
            </S.Wrapper>
            {/* <CardList /> */}
        </Layout>
    );
};

export default Index;
