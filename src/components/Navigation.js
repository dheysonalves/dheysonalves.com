import React, { useState, useContext, useCallback } from 'react';
// import { rhythm } from "../utils/typography"
import styled, { useTheme } from 'styled-components';
import Context from '../store/context.store';
import { Link } from 'gatsby';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px;
    overflow: hidden;

    body,
    ul,
    li {
        padding: 0;
        margin: 0;
    }

    a {
        color: ${props => props.links};
        text-decoration: none;
    }

    a:hover {
        color: gray;
    }

    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
    }

    .menu li {
        margin-left: 10px;
    }

    .menu li a {
        display: block;
        padding: 10px;
    }
`;

const Navigation = () => {
    const [iconState, setIconState] = useState();
    const { state, dispatch } = useContext(Context);
    const theme = useTheme();

    const dispatching = useCallback(() => {
        setIconState(!iconState);
        dispatch({ type: 'TOOGLE_DARK_MODE' });
    }, [dispatch, iconState]);

    return (
        <Header links={state.isDark ? theme.dark.font : theme.light.font}>
            <Link to="/">Dheyson Alves</Link>
            <nav>
                <ul className="menu">
                    <li>
                        <a
                            href="https://dheyson10.gitbook.io/breakpoint/"
                            title="Portfolio"
                            target={`_blank`}
                            rel={`noopener noreferrer`}
                        >
                            Doc
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Dheyson"
                            title="Portfolio"
                            target={`_blank`}
                            rel={`noopener noreferrer`}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <Link to="/sobre/">Sobre</Link>
                    </li>
                    <li>
                        {state.isDark ? (
                            <FaRegLightbulb
                                onClick={() => dispatching()}
                                size={32}
                            />
                        ) : (
                            <FaLightbulb
                                size={32}
                                onClick={() => dispatching()}
                            />
                        )}
                    </li>
                </ul>
            </nav>
        </Header>
    );
};

export default Navigation;
