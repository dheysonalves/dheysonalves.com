import React from 'react';

import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from 'react-icons/io';
import { FaDev, FaDiscord } from 'react-icons/fa';
import * as S from './footer.styles';

const Footer = ({ element }) => {
    return (
        <S.Footer ref={element}>
            <S.IconsWrapper>
                <a
                    href="https://www.linkedin.com/in/dheysonalvess/"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="Logo do Linkedin rede social"
                    title="Minha rede profissional"
                >
                    <IoLogoLinkedin size="2em" />
                </a>
                <a
					href="https://twitter.com/dheysonlalves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor__specific"
                    alt="Logo do passado com cor branca do twitter"
                    title="Quer trocar uma ideia?, manda dm"
                >
                    <IoLogoTwitter size="2em" />{' '}
                </a>
                <a
                    href="https://github.com/dheysonalves"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor__specific"
                    alt="social media"
                    title="Boa parte dos meus projetos"
                >
                    <IoLogoGithub size="2em" />{' '}
                </a>
                <a
                    href="https://dev.to/dheyson_alvess"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor__specific"
                    alt="Logo quadrada com fundo preto com texto DEV no meio de cor branca"
                    title="Meus outros artigos em inglês"
                >
                    <FaDev size="2em" />{' '}
                </a>
                <a
                    href="https://discord.gg/Fzk2PBB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anchor__specific"
                    alt="Logo quadrada com fundo preto com texto DEV no meio de cor branca"
                    title="Comunidade do discord da Coffer"
                >
                    <FaDiscord size="1.9em" />{' '}
                </a>
            </S.IconsWrapper>
            © {new Date().getFullYear()}
        </S.Footer>
    );
};

export default Footer;
