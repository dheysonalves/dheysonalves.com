import React, { useContext, Fragment } from 'react';
import { Link } from 'gatsby';
import { useTheme } from 'styled-components';
import Navbar from './Navigation/Navigation';
// import Menu from "./menu"
import Footer from './Footer/footer';
import Main from './Main/index';
import GlobalStyle from '../../styles/globalStyle';
import Context from '../../store/context.store';
import useSticky from '../../hooks/useSticky';
import * as S from './layout.styles';

const Layout = ({ title, children, max, autow }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    const { state } = useContext(Context);
    const theme = useTheme();
    const { isSticky, element } = useSticky();

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
                lhover={
                    state.isDark
                        ? theme.dark.links_hover
                        : theme.light.links_hover
                }
                scroll={
                    state.isDark
                        ? theme.dark.scroll
                        : theme.dark.scroll
                }
            />
            <S.Wrapper>
                <Navbar sticky={isSticky} />
                <Main element={element} max={max} css={{ alignSelf: 'center' }}>
                    {children}
                </Main>
                <Footer />

            </S.Wrapper>
        </Fragment>
    );
};

export default Layout;
