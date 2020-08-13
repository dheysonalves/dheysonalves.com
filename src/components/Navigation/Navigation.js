import React, { useState, useContext, useCallback } from 'react';
// import { rhythm } from "../utils/typography"
import { useTheme } from 'styled-components';
import Context from '../../store/context.store';
import { Link } from 'gatsby';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

import * as S from './styles';

const Navigation = () => {
    const [iconState, setIconState] = useState();
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
                <S.Menu>
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
                    <S.MenuItem>
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
                    </S.MenuItem>
                </S.Menu>
            </S.Navigation>
        </S.Header>
    );
};

export default Navigation;
