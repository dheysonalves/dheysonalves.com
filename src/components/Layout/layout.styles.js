import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: auto;
	margin: 0 auto;
	max-width: ${rhythm(100)};
	padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`;

export const Head1 = styled.h1`
	margin-bottom: ${rhythm(1.5)};
	margin-top: ${rhythm(1.5)};
	text-shadow: 0px 4px 15px rgba(87, 136, 108, 0.5);
	text-align: center;
`;

export const Head3 = styled.h3`
	font-family: Montserrat, sans-serif;
	margin-top: 0;
	max-width: ${rhythm(50)};
`;
