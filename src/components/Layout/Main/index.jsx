import React from 'react';
import * as S from './styles';

const Main = ({ children, element, max, autow }) => {
	return (
		<S.Main ref={element} max={max} mw={autow}>
			{children}
		</S.Main>
	)
}

export default Main;
