import styled from 'styled-components';
import { rhythm } from '../../utils/typography';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	margin: 0 auto;
	max-width: ${rhythm(100)};
	/* padding: ${rhythm(1.5)} ${rhythm(3 / 4)}; */
`;
