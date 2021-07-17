import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	overflow: auto;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;
