import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';

const Title = ({ label, size, weight, ...props }) => {
	return (
		<S.Title size={size} weight={weight} {...props}>
			{label}
		</S.Title>
	);
};

Title.propTypes = {
	/**
	 * Sets the label text (required)
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Sets the font size for the text
	 */
	size: PropTypes.number,
	/**
	 * Sets the font weight for the text
	 */
	weight: PropTypes.string,
};

Title.defaultProps = {
	label: 'Portfolio',
	size: 24,
	weight: 600,
};

export default Title;
