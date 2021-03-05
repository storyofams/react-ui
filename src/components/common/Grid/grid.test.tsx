import React from 'react';
import { axe } from 'jest-axe';
import 'jest-styled-components';

import { Grid } from '~components';
import { render, screen } from '~lib/test-utils';
import theme from '~styles/theme';

test('[Grid] should not fail accessibility testing', async () => {
  const { container } = render(<Grid rowSize={1} />);

  expect(await axe(container)).toHaveNoViolations();
});

test('handles the rowGap prop when not provided', async () => {
  render(<Grid data-testid="grid" rowSize={1} />);

  expect(screen.getByTestId('grid').firstChild).toHaveStyle('margin-top: 0');
});

test('handles the rowGap prop when provided', async () => {
  const { getByTestId } = render(
    <Grid data-testid="grid" rowSize={1} rowGap={1} />,
  );

  expect(getByTestId('grid').firstChild).toHaveStyle(
    `margin-top: -${theme.space[1]}px`,
  );
});

test('handles the columnGap prop when not provided', async () => {
  render(<Grid data-testid="grid" rowSize={1} />);

  expect(screen.getByTestId('grid').firstChild).toHaveStyle('margin-left: 0');
});

test('handles the columnGap prop when provided', async () => {
  render(<Grid data-testid="grid" rowSize={1} columnGap={1} />);

  expect(screen.getByTestId('grid').firstChild).toHaveStyle(
    `margin-left: -${theme.space[1]}px`,
  );
});

test('handles the rowSize prop', async () => {
  render(<Grid data-testid="grid" rowSize={1} />);

  expect(screen.getByTestId('grid').firstChild).toHaveStyle('margin-left: 0');
  expect(screen.getByTestId('grid').firstChild).toHaveStyle('margin-top: 0');
});
