import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const customRender = (ui, options?) =>
  render(ui, {
    wrapper: (children) => (
      <ThemeProvider theme={theme}>{children} </ThemeProvider>
    ),
    ...options,
  });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
