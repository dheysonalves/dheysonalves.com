import React, { useContext } from 'react';
import { Link } from 'gatsby';
import styled, { useTheme } from 'styled-components';
import Navbar from './Navigation';
// import Menu from "./menu"
import Footer from './footer';
import { rhythm, scale } from '../utils/typography';

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: ${rhythm(30)};
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;
const Head1 = styled.h1`
    ${scale(1.5)};
    margin-bottom: ${rhythm(1.5)};
    margin-top: 0;
`;

const Head3 = styled.h3`
    font-family: Montserrat, sans-serif;
    margin-top: 0;
    max-width: ${rhythm(50)};
`;

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

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
        <Wrapper>
            <header>
                <Navbar />
                {header}
            </header>
            <main>{children}</main>
            <Footer />
        </Wrapper>
    );
};

export default Layout;
