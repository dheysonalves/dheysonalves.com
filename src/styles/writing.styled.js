import styled from 'styled-components';

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
	border: 1px solid ${(props) => props.color};
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

export const SearchUnfound = styled.div`
	border: 0.1px solid #aaa;
	border-radius: 0.5em;
	padding: 2em;
	margin: 0.8em 0;
`;

export const SearchUnfoundTitle = styled.h1`
	margin: 0;
	padding: 0.5em 0;
`;

export const SearchUnfoundDescription = styled.p`
	font-size: 1.2rem;
	font-weight: 500;
`;
