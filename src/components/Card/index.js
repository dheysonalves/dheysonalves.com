import React from 'react';
import * as S from './styles';

import Image from '../Image/index';
import Title from '../Title/index';
import Subtitle from '../Subtitle/index';

import { AiFillGithub, AiFillEye } from "react-icons/ai";


const Card = ({ margin }) => {
	return (
		<S.Wrapper margin={margin}>
			<Image source="https://source.unsplash.com/random" alt="random image" />
			<Title>
				Teste
			</Title>
			<Subtitle>
				Lorem ipsum dolor sit amet consectetur adipisicing elit...
		</Subtitle>
			<S.IconsWrapper>
				<S.IconLink>
					<AiFillGithub size={24} />
				</S.IconLink>
				<S.IconLink>
					<AiFillEye size={24} />
				</S.IconLink>
			</S.IconsWrapper>
		</S.Wrapper>
	)
}

export default Card;
