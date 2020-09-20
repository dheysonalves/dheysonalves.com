// Burger.js
import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import { GiHamburgerMenu } from "react-icons/gi";

const Burger = ({color, open, setOpen}) => {
	return (
		<StyledBurger color={color} open={open} onClick={() => setOpen(!open)} name="Burger navigation">
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
