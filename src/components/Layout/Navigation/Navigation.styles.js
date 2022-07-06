import styled from 'styled-components';
import { Link } from 'gatsby';

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border-bottom: 0.1px solid ${(props) => props.color};
	padding-bottom: 1em;

	@media (min-width: 1270px) {
		flex-direction: row;
		margin: 0 5em;
	}
`;

export const Navigation = styled.nav`
	display: flex;
	flex: 1;
	justify-content: center;
	margin-bottom: 20px;

	@media (min-width: 1270px) {
		display: flex;
		justify-content: flex-start;
		z-index: 1;
		margin: 0;
	}
`;

export const Title = styled.h1`
	font-style: normal;
	font-weight: 700;
	font-size: 2rem;
	text-transform: uppercase;
	color: ${(props) => props.color};
	margin: 0;
	padding: 0;
	cursor: default;

	&:hover {
		-webkit-transition: color 500ms ease-out;
		-moz-transition: color 500ms ease-out;
		-o-transition: color 500ms ease-out;
		transition: color 500ms ease-out;
		transform: scale(1.03);
		color: #ff6100;
		cursor: pointer;
	}
`;

export const LinkStyled = styled(Link)`
	margin: 0;
	padding: 0;
`;

export const Menu = styled.ul`
	display: flex;
	flex: 0.6;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	padding: 0;

	@media (max-width: 1279px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		top: 0;
		right: 0;
		width: 100%;
		z-index: 2;

		a {
			font-size: 1rem;
			text-transform: uppercase;
			font-weight: bold;
			letter-spacing: 0.5rem;
			color: ${(props) => props.link || '#363636'};
			text-decoration: none;
			transition: color 0.3s linear;
		}
	}
`;

export const MenuItem = styled.li`
	display: block;
	margin: 0;

	a {
		font-weight: bold;
		letter-spacing: 0.1rem;
		text-transform: uppercase;
		text-decoration: none;
		transition: color 0.3s linear;
		font-size: 1.1rem;

		&:visited {
			color: #77b597;
		}

		&:hover {
			color: #ff6100;
		}
	}
`;

export const CursorBulb = styled.div`
	cursor: pointer;
`;
