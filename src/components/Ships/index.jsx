import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Ships = ({ label, color, radius, labelColor, ...props }) => {
    return (
        <S.ShipListWrapper>
            <S.ShipWrapper color={color} radius={radius} {...props}>
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
