import styled from 'styled-components';

export const Select = styled.select`
	display: grid;
	grid-template-areas: 'select';
	font-size: ${(props) => props.fontSize};
	height: ${(props) => props.height};
	outline: none;
	font-weight: bold;
	color: #292f36;
	width: 100%;
	min-width: 15ch;
	max-width: 30ch;
	border: 1px solid var(--select-border);
	padding: 0.25em 0.5em;
	cursor: pointer;
	line-height: 1.1;
	background-color: #fff;
	background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
	align-items: center;
`;

export const Option = styled.option`
	font-weight: bold;
	color: #292f36;
`;
