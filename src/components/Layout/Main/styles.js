import styled from 'styled-components';
import { rhythm } from '../../../utils/typography';

export const Main = styled.main`
	max-width: ${(props) => props.max || rhythm(20)};
	margin: ${(props) => props.mw && '0 auto'};
	padding: 0 ${rhythm(3 / 4)};
	padding-bottom: 5vh;

	@media (max-width: 800px) {
		max-width: ${rhythm(100)};
		align-self: center;
	}
	@media (min-width: 800px) {
		align-self: center;
	}
`;
