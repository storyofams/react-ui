import React from 'react';
import { Grid } from '~components';
import { render } from '~/lib';
import 'jest-styled-components';
import theme from '~styles/theme';

test('handles the rowGap prop when not provided', async () => {
  const { getByTestId } = render(<Grid data-testid="grid" rowSize={1} />);

  const element = getByTestId('grid').firstChild;

  expect(element).toHaveStyleRule('margin-top', '0');
});

test('handles the rowGap prop when provided', async () => {
  const { getByTestId } = render(
    <Grid data-testid="grid" rowSize={1} rowGap={1} />,
  );

  const element = getByTestId('grid').firstChild;

  expect(element).toHaveStyleRule('margin-top', `-${theme.space[1]}px`);
});

test('handles the columnGap prop when not provided', async () => {
  const { getByTestId } = render(<Grid data-testid="grid" rowSize={1} />);

  const element = getByTestId('grid').firstChild;

  expect(element).toHaveStyleRule('margin-left', '0');
});

test('handles the columnGap prop when provided', async () => {
  const { getByTestId } = render(
    <Grid data-testid="grid" rowSize={1} columnGap={1} />,
  );

  const element = getByTestId('grid').firstChild;

  expect(element).toHaveStyleRule('margin-left', `-${theme.space[1]}px`);
});

test('handles the rowSize prop', async () => {
  const { getByTestId } = render(<Grid data-testid="grid" rowSize={1} />);

  const element = getByTestId('grid').firstChild;

  expect(element).toHaveStyleRule('margin-left', '0');
  expect(element).toHaveStyleRule('margin-top', '0');
});
