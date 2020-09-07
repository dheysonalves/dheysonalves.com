import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

/**
 * Regular input UI component
 */
const Input = ({ radius, height, background, color, borderColor, ...props }) => {
    return (
        <S.Input
            radius={radius}
            height={height}
            background={background}
            borderColor={borderColor}
			color={color}
            placeholder="Type something"
            {...props}
        />
    );
};

Input.propTypes = {
    /**
     * what is the height?
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
     * what is the color?
     */
    color: PropTypes.string,
    /**
     * what is the color?
     */
    borderColor: PropTypes.string,
};

Input.defaultProps = {
    radius: '0px',
    height: '50px',
    borderColor: '#000'
};

export default Input;
