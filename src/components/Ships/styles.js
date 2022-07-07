import styled from 'styled-components';

export const ShipWrapper = styled.div`
	position: relative;
	display: inline-block;
	box-shadow: inset 0 0 0 0.5px ${(props) => props.border};
	border-radius: ${(props) => (props.radius ? '4px' : '0.3em')};
	margin-right: 0.5em;
	padding: 0.5em 2em;
	cursor: pointer;

	&:hover {
		-webkit-transition: background-color 500ms ease-out;
		-moz-transition: background-color 500ms ease-out;
		-o-transition: background-color 500ms ease-out;
		transition: background-color 500ms ease-out;
		background-color: ${(props) => props.color};
	}
`;

export const ShipListWrapper = styled.div`
	display: inline-block;
`;

export const ShipText = styled.p`
	text-align: center;
	font-size: 0.7rem;
	margin: 0;
	color: ${(props) => props.labelColor};
	font-weight: 700;
	text-transform: uppercase;
`;
