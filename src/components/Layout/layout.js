import React, { useContext, Fragment } from 'react';
import { Link } from 'gatsby';
import styled, { useTheme } from 'styled-components';
import Navbar from './Navigation/Navigation';
// import Menu from "./menu"
import Footer from './Footer/footer';
import { rhythm, scale } from '../../utils/typography';
import GlobalStyle from '../../styles/globalStyle';
import Context from '../../store/context.store';

import * as S from './layout.styles'

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    const { state } = useContext(Context);
    const theme = useTheme();

    if (location.pathname === rootPath) {
        header = (
            <S.Head1>
                <Link
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `inherit`,
                        fontSize: 46,
                    }}
                    to={`/`}
                >
                    {title}
                </Link>
            </S.Head1>
        );
    } else {
        header = (
            <S.Head3>
                <Link
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `inherit`,
                    }}
                    to={`/`}
                >
                    {title}
                </Link>
            </S.Head3>
        );
    }
    return (
        <Fragment>
            <GlobalStyle
                background={
                    state.isDark
                        ? theme.dark.background
                        : theme.light.background
                }
                fontColor={state.isDark ? theme.dark.font : theme.light.font}
                borderColor={state.isDark ? theme.dark.font : theme.light.font}
                links={state.isDark ? theme.dark.links : theme.light.links}
                lhover={state.isDark ? theme.dark.links_hover : theme.light.links_hover}
            />
            <S.Wrapper>
                <header>
                <Navbar />
                </header>
                <S.Main>{children}</S.Main>
                <Footer />
            </S.Wrapper>
        </Fragment>
    );
};

export default Layout;
