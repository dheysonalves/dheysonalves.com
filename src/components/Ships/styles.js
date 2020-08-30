import styled from 'styled-components';

export const ShipWrapper = styled.div`
	background-color: ${props => props.color};
	border-radius: ${props => props.radius ? '4px' : ''};
	width: 90px;
	margin-right: 5px;
	margin-bottom: 5px;
`;

export const ShipText = styled.p`
	text-align: center;
	font-size: 12px;
	padding: 0;
	margin: 0;
	color: ${props => props.labelColor};
	font-weight: 900;
	text-transform: uppercase;
`;
