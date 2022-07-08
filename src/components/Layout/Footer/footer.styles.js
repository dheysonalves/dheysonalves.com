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
