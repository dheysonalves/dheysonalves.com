import styled from 'styled-components';

export const Footer = styled.footer`
	background-color: ${(props) => props.footer};
	color: ${(props) => props.color};
	position: relative;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 2em 5em;
	text-align: center;
	width: 100%;
`;

export const FooterContent = styled.section``;

export const FooterTitle = styled.span``;
