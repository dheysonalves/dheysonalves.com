import React from 'react';
import { FaDev, FaDiscord } from 'react-icons/fa';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

import * as S from './styles.js';

const BiographSocialMedia = () => {
	return (
		<S.SocialMediaContainer>
			<S.SocialLink
				href="https://www.linkedin.com/in/dheysonalvess/"
				target="_blank"
				rel="noopener noreferrer"
				alt="Logo do Linkedin rede social"
				title="Minha rede profissional"
			>
				<IoLogoLinkedin size="2em" />
			</S.SocialLink>
			<S.SocialLink
				href="https://twitter.com/dheysonlalves"
				target="_blank"
				rel="noopener noreferrer"
				alt="Logo do passado com cor branca do twitter"
				title="Quer trocar uma ideia?, manda dm"
			>
				<IoLogoTwitter size="2em" />{' '}
			</S.SocialLink>
			<S.SocialLink
				href="https://github.com/dheysonalves"
				target="_blank"
				rel="noopener noreferrer"
				alt="social media"
				title="Boa parte dos meus projetos"
			>
				<IoLogoGithub size="2em" />{' '}
			</S.SocialLink>
			<S.SocialLink
				href="https://dev.to/dheyson_alvess"
				target="_blank"
				rel="noopener noreferrer"
				alt="Logo quadrada com fundo preto com texto DEV no meio de cor branca"
				title="Meus outros artigos em inglês"
			>
				<FaDev size="2em" />{' '}
			</S.SocialLink>
			<S.SocialLink
				href="https://discord.gg/Fzk2PBB"
				target="_blank"
				rel="noopener noreferrer"
				alt="Logo quadrada com fundo preto com texto DEV no meio de cor branca"
				title="Comunidade do discord da Coffer"
			>
				<FaDiscord size="1.9em" />{' '}
			</S.SocialLink>
		</S.SocialMediaContainer>
	);
};

export default BiographSocialMedia;
