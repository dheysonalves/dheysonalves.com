import React from 'react';
import GlobalStateProvider from './src/store/GlobalStateProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme/theme';
// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";

export const wrapRootElement = ({ element }) => (
	<GlobalStateProvider>
		<ThemeProvider theme={theme}>
			{element}
		</ThemeProvider>
	</GlobalStateProvider>
)
