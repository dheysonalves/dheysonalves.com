import React, { useContext, Fragment } from 'react';
import { Link } from 'gatsby';
import styled, { useTheme } from 'styled-components';
import Navbar from './Navigation/Navigation';
// import Menu from "./menu"
import Footer from './Footer/footer';
import { rhythm, scale } from '../../utils/typography';
import GlobalStyle from '../../styles/globalStyle';
import Context from '../../store/context.store';

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: ${rhythm(30)};
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

const Head1 = styled.h1`
    ${scale(1.5)};
    margin-bottom: ${rhythm(1.5)};
    margin-top: 0;
    text-shadow: 0px 4px 15px rgba(87, 136, 108, 0.5);
    text-align: center;
`;

const Head3 = styled.h3`
    font-family: Montserrat, sans-serif;
    margin-top: 0;
    max-width: ${rhythm(50)};
`;

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;
    const { state } = useContext(Context);
    const theme = useTheme();

    if (location.pathname === rootPath) {
        header = (
            <Head1>
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
            </Head1>
        );
    } else {
        header = (
            <Head3>
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
            </Head3>
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
            <Wrapper>
                <header>
                    <Navbar />
                    {header}
                </header>
                <main>{children}</main>
                <Footer />
            </Wrapper>
        </Fragment>
    );
};

export default Layout;
