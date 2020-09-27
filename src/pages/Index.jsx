import React, { Component, Suspense } from 'react';

import Layout from '../components/Layout/layout';
import Button from '../components/Button';
import { rhythm } from '../utils/typography';
import { withTranslation } from "react-i18next";

import * as S from '../styles/index.styles';
import SEO from '../components/Seo/Seo';

class Index extends Component {
    render () {
        const { t } = this.props;

        return (
            <Layout max={rhythm(100)} mw={true}>
                <SEO title="Dheyson Alves" description={t("A software developer website, loves programming, sometimes plays with react and in the free time write RPG stories.")} />
                <S.Wrapper>
                    {/* <S.ImageWrapper src={Svg} width="100%" height="auto" /> */}
                    <S.Title>
                        {t("Software developer, working to build great ")}
                        <S.EnphasisText>{t(" products with quality.")}</S.EnphasisText>
                    </S.Title>
                    <Button text={t("Reach me")} disabled />
                    {/* <S.IconWrapper>
                        <FiArrowDown size={54} />
                    </S.IconWrapper> */}
                    <small>
                        {t("This website is a working in progress. Currently some reported issues are in progress. You can reach me with any social media below.")}
                    </small>
                </S.Wrapper>
                {/* <CardList /> */}
            </Layout>
        );
    };
};

export default withTranslation()(Index);
