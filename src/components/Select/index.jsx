import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Select = ({ fontSize, height, data = ['React', 'Typescript', 'Nodejs'], ...props }) => {
	return (
		<S.Select fontSize={fontSize} height={height} placeholder="Technology" {...props} >
		<S.Option >
			React
		</S.Option>
		<S.Option>
			Typescript
		</S.Option>
		<S.Option>
			NodeJs
		</S.Option>
	</S.Select>
	)
}

Select.propTypes = {
	height: PropTypes.string.isRequired,
	fontSize: PropTypes.string,
};

Select.defaultProps = {
	fontSize: '16px',
	height: '50px'
};

export default Select;
