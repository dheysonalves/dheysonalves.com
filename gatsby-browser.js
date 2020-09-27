import React, { Suspense } from 'react';
import GlobalStateProvider from './src/store/GlobalStateProvider';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme/theme';
// custom typefaces
import "typeface-montserrat";
import "typeface-merriweather";
import './i18n';

export const wrapRootElement = ({ element }) => (
	<GlobalStateProvider>
		<ThemeProvider theme={theme}>
			<Suspense fallback="loading">
				{element}
			</Suspense>
		</ThemeProvider>
	</GlobalStateProvider>
)
