import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
  body {
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.background};
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  a {
        color: ${(props) => props.links};
        text-decoration: none;
        box-shadow: 0 0 0 0 currentColor;
    }

    ul {
      margin: 0;
    }

    .navbar {
      display: flex;
      align-items: center;
      background-color: ${(props) => props.scroll};
      justify-content: space-between;
      padding: 2rem 2.5rem;
      position: absolute;
      z-index: 1;
      width: 100%;
}

    .navbar-sticky {
      position: fixed;
      top: 0;
      left: 0;
      box-shadow: 1px 1px 1px #222;
      animation: moveDown 0.5s ease-in-out;
    }

    @keyframes moveDown {
      from {
        transform: translateY(-5rem);
      }
      to {
        transform: translateY(0rem);
      }
    }

    @keyframes rotate {
      0% {
        transform: rotateY(360deg);
      }
      100% {
        transform: rotateY(0rem);
      }
    }
`;

export default GlobalStyle;
