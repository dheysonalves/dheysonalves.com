import styled from 'styled-components';

export const ShipWrapper = styled.div`
	position: relative;
	display: inline-block;
	box-shadow: inset 0 0 0 0.5px ${(props) => props.border};
	border-radius: ${(props) => (props.radius ? '4px' : '1em')};
	width: 140px;
	margin-right: 0.5em;
	margin-bottom: 1.5em;
	cursor: pointer;
	padding: 5px;
	background-color: transparent;

	&:hover {
		-webkit-transition: background-color 500ms ease-out;
		-moz-transition: background-color 500ms ease-out;
		-o-transition: background-color 500ms ease-out;
		transition: background-color 500ms ease-out;
		background-color: ${(props) => props.color};
	}
`;

export const ShipBackground = styled.span`
	position: absolute;
	content: '';
	left: 0;
	top: 0;
	border-top-left-radius: 1em;
	border-bottom-left-radius: 1em;
	width: 10%;
	height: 100%;
	z-index: 2;
	background-color: ${(props) => props.color};
	box-shadow: inset 0 0 0 0.5px ${(props) => props.border};
`;

export const ShipListWrapper = styled.div`
	display: inline-block;
`;

export const ShipText = styled.p`
	text-align: center;
	font-size: 0.7rem;
	margin: 0;
	color: ${(props) => props.labelColor};
	font-weight: 900;
	text-transform: uppercase;
`;
