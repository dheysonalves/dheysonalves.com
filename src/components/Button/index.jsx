import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';

const Button = ({ text = 'Submit', click, ...props }) => {
    return (
        <S.Wrapper>
            <S.Button title="Wanna share an idea?" onClick={click} {...props}>
                <S.LabelButton>{text}</S.LabelButton>
            </S.Button>
        </S.Wrapper>
    );
};

Button.propTypes = {
    /**
     * Sets the default inner text (required)
     */
    text: PropTypes.string.isRequired,
};

export default Button;
