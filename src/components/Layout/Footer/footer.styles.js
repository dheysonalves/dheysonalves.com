import styled from 'styled-components';
import { rhythm } from '../../../utils/typography';

export const Footer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	max-width: ${rhythm(22)};
	margin: 0 auto;
	text-align: center;
`;

export const IconsWrapper = styled.div`
	margin-top: 10px;
	a {
		color: #ff6100;
		text-decoration: none;

		:hover {
			color: #363636;
		}

		:active {
			color: #000007;
		}
	}
	.anchor__specific {
		padding-left: 10px;
	}
`;
