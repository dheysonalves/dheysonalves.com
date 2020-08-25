import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Subtitle = ({ label, size, weight, ...props }) => {
	return (
		<S.Subtitle size={size} weight={weight} {...props}>
			{label}
		</S.Subtitle>
	)
}

Subtitle.propTypes = {
	label: PropTypes.string.isRequired,
	size: PropTypes.number,
	weight: PropTypes.number || PropTypes.string
};

Subtitle.defaultProps = {
	label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus morbi purus pellentesque adipiscing..',
	size: 12,
	weight: 600
};

export default Subtitle;
