import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const customRender = (ui, options?) => render(ui, { ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, userEvent };
