import React from 'react';
import * as S from './styles';

const Button = ({ text = 'Submit' }) => {
	return (
		<S.Wrapper>
			<S.Button title="ok" disabled>
				<S.LabelButton>
					{text}
				</S.LabelButton>
			</S.Button>
		</S.Wrapper>
	)
}

export default Button;
