import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Avatar from '../../assets/img/Avatar.png';
import BiographSocialMedia from '../BiographSocialMedia';

import * as S from './styles.js';

const Biography = () => {
	const { t } = useTranslation();

	return (
		<S.Container>
			<S.Avatar
				src={Avatar}
				width="250px"
				height="auto"
				alt="Uma imagem de avatar"
			/>
			<div>
				<BiographSocialMedia logoSize="2em" />
				<S.Title>Front-End Engineer 👨🏽‍💻</S.Title>
				<S.Subtitle>
					{t('Codando. Escrevendo. Aprendendo. Ensinando.')}
				</S.Subtitle>
				<S.BottomSpan>
					{t(
						'CSS, JAVASCRIPT, TYPESCRIPT, REACT E FRONT-END NO GERAL.'
					)}
				</S.BottomSpan>
			</div>
		</S.Container>
	);
};

export default Biography;
