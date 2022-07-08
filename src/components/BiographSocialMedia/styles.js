import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
	margin-top: 10px;
`;

export const SocialLink = styled.a`
	color: #ff6100;
	text-decoration: none;

	:hover {
		opacity: 0.6;
		transition: opacity 500ms ease-out;
	}

	:active {
		opacity: 0.8;
	}

	&:not(:first-child) {
		padding-left: 10px;
	}
`;
