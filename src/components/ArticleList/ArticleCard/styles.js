import styled from 'styled-components';
import { Link } from 'gatsby';

export const Article = styled.article`
	padding: 2em;
	margin: 0.8em 0;
	border: 0.1px solid #aaa;
	border-radius: 0.5em;

	&:hover {
		background-color: #ddd4;
		transition: background-color 500ms ease-out;
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
