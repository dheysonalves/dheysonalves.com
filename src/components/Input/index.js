import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

/**
 * Regular input UI component
 */
const Input = ({ radius, padding, background, color, ...props }) => {
    return (
        <S.Input
            radius={radius}
            padding={padding}
			background={background}
			color={color}
            placeholder="Type something"
            {...props}
        />
    );
};

Input.propTypes = {
    /**
     * what is the padding?
     */
    padding: PropTypes.string.isRequired,
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
};

Input.defaultProps = {
    radius: '0px',
    padding: '10px',
};

export default Input;
