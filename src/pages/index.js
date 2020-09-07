import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

import Layout from '../components/Layout/layout';
import Button from '../components/Button';
import { rhythm, scale } from '../utils/typography';

import * as S from './index.styles';
import Svg from '../assets/svg/ellipse.svg';

const Index = () => {
        return (
            <Layout max={rhythm(100)} mw={true}>
                <S.Wrapper>
                    {/* <S.ImageWrapper src={Svg} width="100%" height="auto" /> */}
                    <S.Title>
                        Software developer,
                    working to build great <S.EnphasisText>
                            products with quality.
                </S.EnphasisText>
                    </S.Title>
                    <Button text="Reach Me" disabled/>
                    {/* <S.IconWrapper>
                        <FiArrowDown size={54} />
                    </S.IconWrapper> */}
                    <small>
                        This website is a working in progress. Currently some reported issues are in progress. You can reach me with any social media below.
                    </small>
                </S.Wrapper>
                {/* <CardList /> */}
            </Layout>
        );
    };

export default Index;
