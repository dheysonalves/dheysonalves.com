import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Select = ({
    fontSize,
    height,
    data = ['React', 'Typescript', 'Nodejs'],
    ...props
}) => {
    return (
        <S.Select
            fontSize={fontSize}
            height={height}
            placeholder="Technology"
            {...props}
        >
            {data.map((item, index) => (
                <S.Option key={index}>{item}</S.Option>
            ))}
        </S.Select>
    );
};

Select.propTypes = {
    height: PropTypes.string.isRequired,
    fontSize: PropTypes.string,
};

Select.defaultProps = {
    fontSize: '16px',
    height: '50px',
};

export default Select;
