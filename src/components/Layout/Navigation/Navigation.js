import React, { useState, useContext, useCallback } from 'react';
// import { rhythm } from "../utils/typography"
import { useTheme } from 'styled-components';
import Context from '../../../store/context.store';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Burger from '../Burger/Burger';
import * as S from './Navigation.styles';

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
            <S.Navigation>
                <S.Title color={sticky && state.isDark ? '#363636' : ''} title="Opa, e ai?">
                        DHEYSON ALVES
                </S.Title>
            </S.Navigation>
            <S.Menu
                color={state.isDark ? '#292F36' : '#fff'}
                link={state.isDark ? '#fff' : '#363636'}
            >
                <S.MenuItem>
                    <a
                        href="/"
                        title="Página principal"
                    >
                        Home
                        </a>
                </S.MenuItem>
                <S.MenuItem>
                    <a
                        href="/Blog/writing"
                        title="Alguns artigos que escrevi"
                    >
                        Escrita
                        </a>
                </S.MenuItem>
                <S.MenuItem>
                    <a
                        href="https://dheyson10.gitbook.io/breakpoint/"
                        title="Minha documentação oficial"
                        target={`_blank`}
                        rel={`noopener noreferrer`}
                    >
                        Documentação
                        </a>
                </S.MenuItem>
                <S.MenuItem>
                    <a
                        href="https://github.com/Dheyson"
                        title="Meus atuais projetos"
                        target={`_blank`}
                        rel={`noopener noreferrer`}
                    >
                        Portfólio
                        </a>
                </S.MenuItem>
                <S.CursorBulb>
                    {state.isDark ? (
                        <FaRegLightbulb onClick={() => dispatching()} size={32} title="Que tal acender a luz?" />
                    ) : (
                            <FaLightbulb onClick={() => dispatching()} size={32} title="Que tal apagar a luz?" />
                        )}
                </S.CursorBulb>
                {/* <S.MenuItem>
                        <Link to="/about/about">About</Link>
                    </S.MenuItem> */}
            </S.Menu>
        </S.Header>
    );
};

export default Navigation;
