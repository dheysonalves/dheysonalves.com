import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin: ${props => props.margin + 'px'};
	width: 400px;
`;

export const IconsWrapper = styled.div`
`;

export const IconLink = styled.a`
	padding: 10px;
`;
