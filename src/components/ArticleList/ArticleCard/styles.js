import styled from 'styled-components';
import { Link } from 'gatsby';

export const Article = styled.article`
	padding: 1.5em 1em;
	margin: 0.5em 0;
	width: 100%;

	&:hover {
		background-color: #ddd5;
		border-radius: 0.5em;
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
	display: block;
	cursor: default;
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const EnphasisSpan = styled.span`
	color: #ff6100;
	display: block;
	cursor: default;
`;

export const DateParagraph = styled.span`
	display: block;
	font-weight: bold;
	margin-top: 1rem;
	margin-bottom: 0.5rem;
`;
