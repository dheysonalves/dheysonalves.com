import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.fontColor};
    background-color: ${props => props.background};
    box-sizing: border-box;
    border: 10px solid ${props => props.borderColor};
  }
`;

export default GlobalStyle;
