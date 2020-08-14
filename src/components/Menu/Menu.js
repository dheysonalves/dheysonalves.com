import React from 'react';
// import { rhythm } from "../utils/typography"
import styled from 'styled-components';
import { Link } from 'gatsby';

import * as S from './Menu.styled';

const Menu = () => {
    return (
        <S.Wrapper>
            <S.Menu>
                <li>
                    <Link to="/">Web</Link>
                </li>
                <li>
                    <Link to="/">Computação</Link>
                </li>
                <li>
                    <Link to="/">Open Source</Link>
                </li>
            </S.Menu>
        </S.Wrapper>
    );
};

export default Menu;
