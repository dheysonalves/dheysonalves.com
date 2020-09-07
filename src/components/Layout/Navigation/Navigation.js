import React, { useState, useContext, useCallback } from 'react';
// import { rhythm } from "../utils/typography"
import { useTheme } from 'styled-components';
import Context from '../../../store/context.store';
import { Link } from 'gatsby';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import Burger from '../Burger/Burger';
import * as S from './Navigation.styles';
import Layout from '../../Layout/layout';

const Navigation = ({ sticky }) => {
    const [iconState, setIconState] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const { state, dispatch } = useContext(Context);
    const theme = useTheme();

    const dispatching = useCallback(() => {
        setIconState(!iconState);
        dispatch({ type: 'TOOGLE_DARK_MODE' });
    }, [dispatch, iconState]);

    return (
        <S.Header>
            <S.Navigation className={sticky ? 'navbar navbar-sticky' : ''}>
                <S.Title color={sticky && state.isDark ? '#363636' : ''}>
                        DHEYSON ALVES
                </S.Title>
                <S.Menu
                    open={isOpen}
                    color={state.isDark ? '#292F36' : '#fff'}
                    link={state.isDark ? '#fff' : '#363636'}
                >
                    <S.MenuItem>
                        <a
                            href="/"
                            title="Home"
                        >
                            Home
                        </a>
                    </S.MenuItem>
                    <S.MenuItem>
                        <a
                            href="/Blog/Blog"
                            title="Some articles that I wrote"
                        >
                            Blog
                        </a>
                    </S.MenuItem>
                    <S.MenuItem>
                        <a
                            href="https://dheyson10.gitbook.io/breakpoint/"
                            title="My personal documentation"
                            target={`_blank`}
                            rel={`noopener noreferrer`}
                        >
                            Documentation
                        </a>
                    </S.MenuItem>
                    <S.MenuItem>
                        <a
                            href="https://github.com/Dheyson"
                            title="My current active projects"
                            target={`_blank`}
                            rel={`noopener noreferrer`}
                        >
                            Portfolio
                        </a>
                    </S.MenuItem>
                    {/* <S.MenuItem>
                        <Link to="/about/about">About</Link>
                    </S.MenuItem> */}
                </S.Menu>
                <div>
                    <Burger
                        color={state.isDark ? '#fff' : '#363636'}
                        open={isOpen}
                        setOpen={setIsOpen}
                    />
                </div>

                {state.isDark ? (
                    <FaRegLightbulb onClick={() => dispatching()} size={32} />
                ) : (
                    <FaLightbulb size={32} onClick={() => dispatching()} />
                )}

            </S.Navigation>
        </S.Header>
    );
};

export default Navigation;
