import styled from 'styled-components';

export const Title = styled.h1`
	font-style: normal;
	font-weight: ${(props) => props.weight || 600};
	font-size: ${(props) => props.size + 'px' || '24px'};
	line-height: 36px;
	padding: 0;
	margin: 0;
	width: 100%;
`;
