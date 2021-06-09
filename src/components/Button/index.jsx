import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';

const Button = ({ text = 'Submit', click, bakgroundColor, ...props }) => {
	return (
		<S.Button
			title="Wanna share an idea?"
			onClick={click}
			background={bakgroundColor}
			role="button"
			{...props}
		>
			<S.LabelButton>{text}</S.LabelButton>
		</S.Button>
	);
};

Button.propTypes = {
	/**
	 * Sets the default inner text (required)
	 */
	text: PropTypes.string.isRequired,
};

export default Button;
