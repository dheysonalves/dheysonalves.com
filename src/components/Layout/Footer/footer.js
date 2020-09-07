import React from 'react';
import styled from 'styled-components';

import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from 'react-icons/io';
import * as S from './footer.styles';

const Footer = ({element}) => {
    return (
        <S.Footer ref={element}>
            © {new Date().getFullYear()}, Created by Dheyson Alves with
            {` `}
            <a
                href="https://www.gatsbyjs.org"
                trget="_blank"
                rel="noopener noreferrer"
            >
                Gatsby
            </a>
            +
            <a
                href="https://pt-br.reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                React
            </a>
            +
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                Storybook
            </a>
            +
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                GraphQL
            </a>
            <p>
                Text me with any of these below...
            </p>
            <S.IconsWrapper>
                <a
                    href="https://www.linkedin.com/in/dheysonalvess/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IoLogoLinkedin size="2em" />
                </a>
                <a
                    href="https://github.com/Dheyson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor__specific"
                >
                    <IoLogoGithub size="2em" />{' '}
                </a>
                <a
                    href="https://twitter.com/DheysonAlves2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor__specific"
                >
                    <IoLogoTwitter size="2em" />{' '}
                </a>
            </S.IconsWrapper>
        </S.Footer>
    );
};

export default Footer;
