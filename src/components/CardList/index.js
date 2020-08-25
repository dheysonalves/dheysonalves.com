import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

import Card from '../Card';

const CardList = () => {
	return (
		<S.Wrapper>
			<Card margin={20} />
			<Card margin={20} />
			<Card margin={20} />
		</S.Wrapper>
	)
}

CardList.propTypes = {

};

CardList.defaultProps = {

};

export default CardList;
