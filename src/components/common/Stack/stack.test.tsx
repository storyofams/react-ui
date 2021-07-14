import React from 'react';
import { axe } from 'jest-axe';

import { Stack } from '~components';
import { render, screen } from '~lib/test-utils';

test('[Stack] should not fail accessibility testing', async () => {
  const { container } = render(<Stack space={0} />);

  expect(await axe(container)).toHaveNoViolations();
});

test('handles the flexdirection prop when not provided', async () => {
  render(<Stack data-testid="stack" space={0} />);

  expect(screen.getByTestId('stack')).toHaveStyle('flex-direction: row');
});

test('handles the flexdirection prop when provided', async () => {
  render(<Stack data-testid="stack" flexDirection="column" space={0} />);

  expect(screen.getByTestId('stack')).toHaveStyle(`flex-direction: column`);
});

test('handles the isRow prop', async () => {
  render(
    <Stack data-testid="stack" flexDirection="column-reverse" space={2} />,
  );

  expect(screen.getByTestId('stack')).toHaveStyle(
    `flex-direction: column-reverse`,
  );
});

test('handles the isReversed prop', async () => {
  render(<Stack data-testid="stack" flexDirection="row-reverse" space={2} />);

  expect(screen.getByTestId('stack')).toHaveStyle(
    `flex-direction: row-reverse`,
  );
});
