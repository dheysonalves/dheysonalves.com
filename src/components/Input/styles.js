import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
`;

export const Input = styled.input`
	border: 2px solid ${(props) => props.borderColor};
	border-radius: ${(props) => props.radius};
	padding: 10px;
	height: ${(props) => props.height};
	background-color: ${(props) => props.background};
	color: ${(props) => props.color};
	outline: none;
`;

export const PostsCounter = styled.span`
	position: absolute;
	right: 15px;
	top: 15px;
	font-weight: bold;
	color: #363636;
	font-size: 12px;
`;
