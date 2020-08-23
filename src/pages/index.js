import React from 'react';

import Layout from '../components/Layout/layout';
import Button from '../components/Button';
import { rhythm, scale } from '../utils/typography';

import * as S from './index.styles';

const Index = () => {
    return (
        <Layout max={rhythm(100)} mw={true}>
            <S.Title>
                Software developer,
                working to build great <S.EnphasisText>
                    products with quality.
                </S.EnphasisText>
            </S.Title>
            <Button text="Reach Me" />
        </Layout>
    );
};

export default Index;
