import styled from 'styled-components';

export const SectionArticle = styled.section`
	margin-top: 3em;
	margin-bottom: 0;

	@media (max-width: 800px) {
		margin-bottom: 10px;
	}
`;

export const Heading = styled.h1`
	margin: 0;
	padding-bottom: 0.5em;

	@media (max-width: 800px) {
		font-size: 2rem;
	}
`;

export const PostInformation = styled.p`
	display: block;
	margin-bottom: 0.8em;
`;

export const SocialMediaShare = styled.div`
	margin-bottom: 1em;
`;

export const Divider = styled.hr`
	border: 1px solid ${(props) => props.color};
	opacity: 0.2;
	width: 100%;
	margin: 1em 0;
`;

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	list-style: none;
	padding: 0;
`;
