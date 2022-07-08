import React from 'react';

import Avatar from '../../assets/img/Avatar.png';
import BiographSocialMedia from '../BiographSocialMedia';

import * as S from './styles.js';

const Biography = () => {
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
					Codando. Escrevendo. Aprendendo. Ensinando.
				</S.Subtitle>
				<S.BottomSpan>
					CSS, Javascript, Typescript, React e Front-End no geral.
				</S.BottomSpan>
			</div>
		</S.Container>
	);
};

export default Biography;
