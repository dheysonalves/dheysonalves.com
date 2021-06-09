import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

/**
 * Regular input UI component
 */
const Input = ({
	radius,
	height,
	background,
	color,
	borderColor,
	value,
	onChange,
	counter,
	...props
}) => {
	return (
		<S.Wrapper>
			<S.Input
				radius={radius}
				height={height}
				background={background}
				borderColor={borderColor}
				color={color}
				placeholder="Type something"
				onChange={onChange}
				value={value}
				{...props}
			/>
			<S.PostsCounter>{counter}</S.PostsCounter>
		</S.Wrapper>
	);
};

Input.propTypes = {
	/**
	 * what is the height? (required)
	 */
	height: PropTypes.string.isRequired,
	/**
	 * what is the radius?
	 */
	radius: PropTypes.string,
	/**
	 * what is the background color?
	 */
	background: PropTypes.string,
	/**
	 * what is the font color?
	 */
	color: PropTypes.string,
	/**
	 * what is the border color?
	 */
	borderColor: PropTypes.string,
	/**
	 * what is input value?
	 */
	value: PropTypes.string.isRequired,
	/**
	 * is the onChange function for the value.
	 */
	onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
	radius: '0px',
	height: '20px',
	borderColor: '#000',
	value: '',
};

export default Input;
