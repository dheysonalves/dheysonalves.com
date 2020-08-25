import React, { useEffect, useCallback, useState} from 'react';

import * as S from './styles';

import Card from '../Card';
import Pagination from '../../utils/pagination';

const values = [
	{
		photo: '',
		title: '',
		subtitle: '',
		github: '',
		linkedin: '',
	},
	{
		photo: '',
		title: '',
		subtitle: '',
		github: '',
		linkedin: '',
	},
	{
		photo: '',
		title: '',
		subtitle: '',
		github: '',
		linkedin: '',
	},
	{
		photo: '',
		title: '',
		subtitle: '',
		github: '',
		linkedin: '',
	}
]

const CardList = () => {
	// const [state, setState] = useState({ allRepositories: [], currentRepositories: [], currentPage: null, totalPages: null });

	// useEffect(() => {
	// 	const { data: allRepositories = [] } = values.findAll();
	// 	setState({ allRepositories });
	// }, [setState]);

	// const onPageChanged = useCallback((data) => {
	// 	const { allRepositories } = state;
	// 	const { currentPage, totalPages, pageLimit } = data;

	// 	const offset = (currentPage - 1) * pageLimit;
	// 	const currentRepositories = allRepositories.slice(offset, offset + pageLimit);

	// 	setState({ currentPage, currentRepositories, totalPages });
	// }, [state, setState]);

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
