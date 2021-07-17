import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Subtitle = ({ label, size, weight, align, ...props }) => {
	return (
		<S.Subtitle size={size} weight={weight} align={align} {...props}>
			{label}
		</S.Subtitle>
	);
};

Subtitle.propTypes = {
	/**
	 * Sets label text for the subtitle (required)
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Sets font-size for the text
	 */
	size: PropTypes.number,
	/**
	 * Sets the font-weight for the text
	 */
	weight: PropTypes.string,
	/**
	 * Sets the text-alignment for the text
	 */
	align: PropTypes.string,
};

Subtitle.defaultProps = {
	label:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus morbi purus pellentesque adipiscing..',
	size: 12,
	weight: 600,
	align: 'justify',
};

export default Subtitle;
