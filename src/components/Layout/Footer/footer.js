import React from 'react';
import styled from 'styled-components';

import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import * as S from './footer.styles';

const Footer = () => {
    return (
        <S.Footer>
            © {new Date().getFullYear()}, Construido com
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
            </S.IconsWrapper>
        </S.Footer>
    );
};

export default Footer;
