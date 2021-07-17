import styled from 'styled-components';

export const Subtitle = styled.p`
	font-style: normal;
	font-weight: ${(props) => props.weight || 600};
	font-size: ${(props) => props.size + 'px' || '12px'};
	line-height: 18px;
	margin-bottom: 10px;
	text-align: ${(props) => props.align};
`;
