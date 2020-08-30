import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Ships = ({ label, color, radius, labelColor, ...props }) => {
	return (
		<S.ShipWrapper color={color} radius={radius} {...props}>
			<S.ShipText labelColor={labelColor}>{label}</S.ShipText>
		</S.ShipWrapper>
	)
}

Ships.propTypes = {
	label: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	radius: PropTypes.bool,
	labelColor: PropTypes.string
};

Ships.defaultProps = {
	label: 'React',
	radius: false
};

export default Ships;
