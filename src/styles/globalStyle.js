import { createGlobalStyle  } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
		/*Safari e Chrome antigos*/
    -webkit-transform: scale(2.0);
    -webkit-transform-origin: 0 0;

    /*Firefox mais antigo*/
    -moz-transform: scale(2.0);
    -moz-transform-origin: 0 0;

    /*IE 9*/
    -ms-transform: scale(2.0);
    -ms-transform-origin: 0 0;

    /*navegadores atualizados*/
    transform: scale(2.0);
    transform-origin: 0 0;
  }
`

export default GlobalStyle;
