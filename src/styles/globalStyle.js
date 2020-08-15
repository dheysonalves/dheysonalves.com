import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
  body {
    color: ${props => props.fontColor};
    background-color: ${props => props.background};
    box-sizing: border-box;
    border: 10px solid ${props => props.borderColor};
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  a {
        color: ${props => props.links};
        text-decoration: none;
        box-shadow: 0 0 0 0 currentColor;
    }

    a:hover {
        color: ${props => props.lhover};
    }

    ul {
      margin: 0;
    }

`;

export default GlobalStyle;
