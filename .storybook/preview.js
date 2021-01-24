import React from 'react';
import GlobalStyles from '../src/styles/globalStyle';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
