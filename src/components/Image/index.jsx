import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Image = ({ source, alt, ...props }) => {
    return <S.Image src={source} alt={alt} {...props} />;
};

Image.propTypes = {
    /**
     * What is the source of the image?
     */
    source: PropTypes.string,
    /**
     * What alt props should be
     */
    alt: PropTypes.string,
};

Image.defaultProps = {
    source: '',
    alt: '',
};

export default Image;
