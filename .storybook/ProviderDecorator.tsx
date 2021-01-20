import React from "react";

import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme'
import CSSreset from "../src/styles/CSSreset";

const ProviderDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <CSSreset />
    {storyFn()}
  </ThemeProvider>
);

export default ProviderDecorator;
