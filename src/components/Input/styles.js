import styled from 'styled-components';

export const Input = styled.input`
	border: 2px solid #292F36;
	border-radius: ${props => props.radius};
	padding: ${props => props.padding};
	background-color: ${props => props.background};
	color: ${props => props.color};
	outline: none;
`;
