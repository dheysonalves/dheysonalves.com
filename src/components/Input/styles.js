import styled from 'styled-components';

export const Input = styled.input`
    border: 2px solid ${(props) => props.borderColor};
    border-radius: ${(props) => props.radius};
    padding: 10px;
    height: ${(props) => props.height};
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
    outline: none;
`;
