import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';

import * as S from './styles';
import context from '../../store/context.store';

const Ships = ({ label, color, radius, labelColor, ...props }) => {
	const theme = useTheme();
	const { state } = useContext(context);

	const checkColor = React.useCallback(
		(elem) => {
			if (state.isDark) {
				return theme.dark[elem];
			}

			return theme.light[elem];
		},
		[state.isDark, theme.dark, theme.light]
	);

	return (
		<S.ShipListWrapper>
			<S.ShipWrapper color={checkColor(color)} radius={radius} {...props}>
				<S.ShipText labelColor={labelColor}>{label}</S.ShipText>
			</S.ShipWrapper>
		</S.ShipListWrapper>
	);
};

Ships.propTypes = {
	/**
	 * Sets the label from the inner text (required)
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Sets the background color for the ship (required)
	 */
	color: PropTypes.string.isRequired,
	/**
	 * Sets the radios for the ship
	 */
	radius: PropTypes.bool,
	/**
	 * Sets the label color for the ship
	 */
	labelColor: PropTypes.string,
};

Ships.defaultProps = {
	label: 'React',
	radius: false,
};

export default Ships;
