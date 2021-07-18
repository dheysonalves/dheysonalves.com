import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/Seo/Seo';
import Footer from '../components/Layout/Footer/footer';
import * as Svg from '../assets/svg/index';
import { rhythm } from '../utils/typography';

import * as S from '../styles/about.styles';

const About = (props) => {
    return (
        <Layout location={props.location} max={rhythm(28)}>
            <SEO title="Sobre"></SEO>
            <S.Container>
                <img src={Svg.default.Cat} width="300px" height="auto" />
                <div>
                    <h2>Ops 😨, essa página ainda não foi escrita.</h2>
                    <p>Aguarda um pouco mais 😎 </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Animi sed deleniti vitae. Obcaecati quisquam
                        similique libero ut, inventore pariatur nulla,
                        laboriosam nam perferendis iure atque nisi sequi rerum
                        magnam optio?
                    </p>
                </div>
            </S.Container>
            <S.Container>
                <div>
                    <h2>Ops 😨, essa página ainda não foi escrita.</h2>
                    <p>Aguarda um pouco mais 😎 </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Animi sed deleniti vitae. Obcaecati quisquam
                        similique libero ut, inventore pariatur nulla,
                        laboriosam nam perferendis iure atque nisi sequi rerum
                        magnam optio?
                    </p>
                </div>
                <img src={Svg.default.Cat} width="300px" height="auto" />
            </S.Container>
            <S.Container>
                <img src={Svg.default.Cat} width="300px" height="auto" />
                <div>
                    <h2>Ops 😨, essa página ainda não foi escrita.</h2>
                    <p>Aguarda um pouco mais 😎 </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Animi sed deleniti vitae. Obcaecati quisquam
                        similique libero ut, inventore pariatur nulla,
                        laboriosam nam perferendis iure atque nisi sequi rerum
                        magnam optio?
                    </p>
                </div>
            </S.Container>
            <Footer />
        </Layout>
    );
};

export default About;
