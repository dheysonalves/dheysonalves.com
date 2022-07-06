import styled from 'styled-components';
import { Article, ArticleTitle, ArticleLink } from './index.styles';

export const BlogPostsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: flex-start;
	margin-top: 2rem;
	height: auto;
	max-width: auto;
`;

export const Divider = styled.div`
	border: 1px solid #363636;
	opacity: 0.2;
	width: 100%;
`;

export const EmphasisParagraph = styled.p`
	display: block;
	cursor: default;
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const DateParagraph = styled.span`
	display: block;
	font-weight: bold;
	margin-top: 1rem;
	margin-bottom: 0.5rem;
`;

export const ArticleStyle = styled(Article)``;

export const ArticleTitleStyled = styled(ArticleTitle)``;

export const ArticleTitleLink = styled(ArticleLink)``;
