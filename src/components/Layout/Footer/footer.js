import React from 'react';
import styled from 'styled-components';

import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from 'react-icons/io';
import * as S from './footer.styles';

const Footer = ({element}) => {
    return (
        <S.Footer ref={element}>
            <S.IconsWrapper>
                <a
                    href="https://www.linkedin.com/in/dheysonalvess/"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="Linkedin social media"
                    title="Minha rede profissional"
                >
                    <IoLogoLinkedin size="2em" />
                </a>
                <a
                    href="https://github.com/Dheyson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor__specific"
                    alt="social media"
                    title="Boa parte dos meus projetos"
                >
                    <IoLogoGithub size="2em" />{' '}
                </a>
                <a
                    href="https://twitter.com/DheysonAlves2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor__specific"
                    alt="Twitter social media"
                    title="Quer trocar uma ideia?, manda dm"
                >
                    <IoLogoTwitter size="2em" />{' '}
                </a>
            </S.IconsWrapper>
            © {new Date().getFullYear()}
        </S.Footer>
    );
};

export default Footer;
