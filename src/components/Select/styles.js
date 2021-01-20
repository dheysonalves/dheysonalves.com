import styled from 'styled-components';

export const Select = styled.select`
    padding: 10px;
    font-size: ${(props) => props.fontSize};
    border: 0px;
    width: 200px;
    height: ${(props) => props.height};
    outline: none;
    font-weight: bold;
    color: #292f36;
`;

export const Option = styled.option`
    font-weight: bold;
    color: #292f36;
`;
