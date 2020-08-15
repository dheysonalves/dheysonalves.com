import React, { useState, useContext, useCallback } from 'react';
// import { rhythm } from "../utils/typography"
import { useTheme } from 'styled-components';
import Context from '../../store/context.store';
import { Link } from 'gatsby';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import Burger from '../Burger/Burger';
import * as S from './Navigation.styles';

const Navigation = () => {
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
                <div>
                    <Link to="/">Dheyson Alves</Link>
                </div>
                <S.Menu open={isOpen} color={state.isDark ? '#292F36' : '#fff'} link={state.isDark ? '#fff' : '#363636'}>
                    <S.MenuItem>
                        <a
                            href="https://dheyson10.gitbook.io/breakpoint/"
                            title="Portfolio"
                            target={`_blank`}
                            rel={`noopener noreferrer`}
                        >
                            Doc
                        </a>
                    </S.MenuItem>
                    <S.MenuItem>
                        <a
                            href="https://github.com/Dheyson"
                            title="Portfolio"
                            target={`_blank`}
                            rel={`noopener noreferrer`}
                        >
                            Portfolio
                        </a>
                    </S.MenuItem>
                    <S.MenuItem>
                        <Link to="/sobre/">Sobre</Link>
                    </S.MenuItem>
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
