import React from 'react';
import { Stack } from '~components';
import { render } from '~lib';

test('handles the flexdirection prop when not provided', async () => {
  const { getByTestId } = render(<Stack data-testid="stack" space={0} />);

  const stackStyle = window.getComputedStyle(getByTestId('stack'));

  expect(stackStyle.flexDirection).toBe('row');
});

test('handles the flexdirection prop when provided', async () => {
  const flexDirection = 'column';
  const { getByTestId } = render(
    <Stack data-testid="stack" flexDirection={flexDirection} space={0} />,
  );

  const stackStyle = window.getComputedStyle(getByTestId('stack'));

  expect(stackStyle.flexDirection).toBe(flexDirection);
});

test('handles the isRow prop', async () => {
  const { getByTestId } = render(
    <Stack data-testid="stack" flexDirection="column-reverse" space={2} />,
  );

  const stackStyle = window.getComputedStyle(getByTestId('stack'));

  expect(stackStyle.flexDirection).toBe('column-reverse');
});

test('handles the isReversed prop', async () => {
  const { getByTestId } = render(
    <Stack data-testid="stack" flexDirection="row-reverse" space={2} />,
  );

  const stackStyle = window.getComputedStyle(getByTestId('stack'));

  expect(stackStyle.flexDirection).toBe('row-reverse');
});
