import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';

const Title = ({ label, size, weight, ...props }) => {
	return (
		<S.Title size={size} weight={weight} {...props}>
			{label}
		</S.Title>
	)
};

Title.propTypes = {
	label: PropTypes.string.isRequired,
	size: PropTypes.number,
	weight: PropTypes.number || PropTypes.string
};

Title.defaultProps = {
	label: 'Portfolio',
	size: 24,
	weight: 600
};

export default Title;
