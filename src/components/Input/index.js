import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Input = ({ radius, ...props}) => {
	return (
		<S.Input radius={radius} {...props} />
	)
}

Input.propTypes = {
	radius: PropTypes.string
};

Input.defaultProps = {
	radius: '0px'
};

export default Input;
