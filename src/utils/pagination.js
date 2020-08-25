import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
	let i = from;
	const range = [];

	while (i <= to) {
		range.push(i);
		i += step;
	}

	return range;
}

class Pagination extends Component {

	constructor(props) {
		super(props);
		const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

		this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
		this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

		// pageNeighbours can be: 0, 1 or 2
		this.pageNeighbours = typeof pageNeighbours === 'number'
			? Math.max(0, Math.min(pageNeighbours, 2))
			: 0;

		this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

		this.state = { currentPage: 1 };
	}

}

Pagination.propTypes = {
	totalRecords: PropTypes.number.isRequired,
	pageLimit: PropTypes.number,
	pageNeighbours: PropTypes.number,
	onPageChanged: PropTypes.func
};

export default Pagination;
