// Burger.js
import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({color, open, setOpen}) => {
	return (
		<StyledBurger color={color} open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	)
}

Burger.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired,
};

export default Burger;
