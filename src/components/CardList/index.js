import React, { useEffect, useCallback, useState} from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import * as S from './styles';

import Card from '../Card';

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
		<S.Container>
			<S.FilterContainer>
				<span>a</span>
				<span>a</span>
				<span>a</span>
				<span>a</span>
			</S.FilterContainer>
			<S.Pagination>
				<S.PaginationTitle>All repositories (100)</S.PaginationTitle>
				<S.PaginationActionWrapper>
					<S.PaginationAction><AiOutlineArrowLeft /></S.PaginationAction>
					<S.PaginationAction>1</S.PaginationAction>
					<S.PaginationAction>2</S.PaginationAction>
					<S.PaginationAction>3</S.PaginationAction>
					<S.PaginationAction>4</S.PaginationAction>
					<S.PaginationAction>5</S.PaginationAction>
					<S.PaginationAction>...</S.PaginationAction>
					<S.PaginationAction><AiOutlineArrowRight /></S.PaginationAction>
				</S.PaginationActionWrapper>
			</S.Pagination>
			<S.Wrapper>
				<Card />
				<Card />
				<Card />
				<Card />
			</S.Wrapper>
		</S.Container>
	)
}

CardList.propTypes = {

};

CardList.defaultProps = {

};

export default CardList;
