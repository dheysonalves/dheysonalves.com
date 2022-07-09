import styled from 'styled-components';
import { Link } from 'gatsby';

export const Article = styled.article`
	padding: 2em;
	margin: 0.8em 0;
	border: 0.1px solid rgb(209, 213, 219);
	border-radius: 0.5em;
	width: 100%;

	&:hover {
		background-color: #fbfbfb11;
		box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
			rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
			rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
		transition: background-color 200ms ease-out;
	}
`;

export const ArticleTitle = styled.h3`
	margin: 0;
	padding: 0;
	box-shadow: none;
	text-transform: uppercase;
	font-family: Montserrat, sans-serif;
	font-weight: 600;
	line-height: 1.2em;
	letter-spacing: 0.01em;
`;

export const ArticleLink = styled(Link)`
	&:hover {
		opacity: 0.8;
	}

	&:active {
		opacity: 0.8;
	}
`;

export const EmphasisParagraph = styled.p`
	cursor: default;
	font-size: 1rem;
	font-weight: 500;
	margin-bottom: 1em;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`;

export const DateParagraph = styled.span`
	display: block;
	color: #aaa;
	font-size: 1rem;
	font-weight: 500;
	padding: 0.5em 0;
`;
