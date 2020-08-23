import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Button = styled.button`
	background-color: ${props => props.background || '#fff'};
	border: 2px solid #292F36;
	padding: 10px;
	width: 200px;
	cursor: pointer;
	outline: none;

	:disabled {
		opacity: 0.5;
	}
`;

export const LabelButton = styled.span`
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 24px;
	text-transform: uppercase;
	color: #292F36;
`;
