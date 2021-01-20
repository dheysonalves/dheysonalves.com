import React from 'react';
import * as S from './styles';

const Button = ({ text = 'Submit', click, ...props }) => {
  return (
    <S.Wrapper>
      <S.Button title="Wanna share an idea?" onClick={click} {...props}>
        <S.LabelButton>{text}</S.LabelButton>
      </S.Button>
    </S.Wrapper>
  );
};

export default Button;
