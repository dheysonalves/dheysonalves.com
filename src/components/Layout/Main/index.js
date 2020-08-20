import React from 'react';
import * as S from './styles';

const Main = ({ children, element }) => {
	return (
		<S.Main ref={element}>
			{children}
		</S.Main>
	)
}

export default Main;
