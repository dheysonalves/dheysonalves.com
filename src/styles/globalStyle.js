import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  :root {
  --select-border: #777;
  --select-focus: blue;
  --select-arrow: #363636;
}

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

    select {
      // A reset of styles, including removing the default dropdown arrow
      appearance: none;
      // Additional resets for further consistency
      outline: none;
      background-color: transparent;
      border: none;
      padding: 0 1em 0 0;
      margin: 0;
      width: 100%;
      font-family: inherit;
      font-size: inherit;
      cursor: inherit;
      line-height: inherit;
}
    select::-ms-expand {
      display: none;
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
