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
                <S.Image
                    src="https://res.cloudinary.com/dh3m0z4kd/image/upload/v1619922179/dheysonalves.com/about/college_2018.jpg"
                    width="400px"
                    height="auto"
                />
                <S.InfoWrapper>
                    <h2>Ops 😨, essa página ainda não foi escrita.</h2>
                    <p>Aguarda um pouco mais 😎 </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Animi sed deleniti vitae. Obcaecati quisquam
                        similique libero ut, inventore pariatur nulla,
                        laboriosam nam perferendis iure atque nisi sequi rerum
                        magnam optio?
                    </p>
                </S.InfoWrapper>
            </S.Container>
            <S.Container>
                <S.InfoWrapper>
                    <h2>Ops 😨, essa página ainda não foi escrita.</h2>
                    <p>Aguarda um pouco mais 😎 </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Animi sed deleniti vitae. Obcaecati quisquam
                        similique libero ut, inventore pariatur nulla,
                        laboriosam nam perferendis iure atque nisi sequi rerum
                        magnam optio?
                    </p>
                </S.InfoWrapper>
                <S.Image
                    src="https://res.cloudinary.com/dh3m0z4kd/image/upload/v1619922043/dheysonalves.com/about/eumakers_2019.jpg"
                    width="350px"
                    height="auto"
                />
            </S.Container>
            <S.Container>
                <S.Image
                    src="https://res.cloudinary.com/dh3m0z4kd/image/upload/v1619921179/dheysonalves.com/about/softmakers_2019.jpg"
                    width="400px"
                    height="auto"
                />
                <S.InfoWrapper>
                    <h2>Ops 😨, essa página ainda não foi escrita.</h2>
                    <p>Aguarda um pouco mais 😎 </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Animi sed deleniti vitae. Obcaecati quisquam
                        similique libero ut, inventore pariatur nulla,
                        laboriosam nam perferendis iure atque nisi sequi rerum
                        magnam optio?
                    </p>
                </S.InfoWrapper>
            </S.Container>
            <S.Container>
                <S.InfoWrapper>
                    <h2>Ops 😨, essa página ainda não foi escrita.</h2>
                    <p>Aguarda um pouco mais 😎 </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Animi sed deleniti vitae. Obcaecati quisquam
                        similique libero ut, inventore pariatur nulla,
                        laboriosam nam perferendis iure atque nisi sequi rerum
                        magnam optio?
                    </p>
                </S.InfoWrapper>
                <S.Image
                    src="https://res.cloudinary.com/dh3m0z4kd/image/upload/v1619921174/dheysonalves.com/about/softmakers2021.png"
                    width="400px"
                    height="auto"
                />
            </S.Container>
            <Footer />
        </Layout>
    );
};

export default About;
