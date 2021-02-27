import styled from 'styled-components';

export const ShipWrapper = styled.div`
    background-color: ${(props) => props.color};
    border-radius: ${(props) => (props.radius ? '4px' : '')};
    width: 120px;
    margin-right: 5px;
    margin-bottom: 5px;
`;

export const ShipListWrapper = styled.div`
    display: inline-block;
`;

export const ShipText = styled.p`
    text-align: center;
    font-size: 0.7rem;
    padding: 2px;
    margin: 0;
    color: ${(props) => props.labelColor};
    font-weight: 900;
    text-transform: uppercase;
`;
