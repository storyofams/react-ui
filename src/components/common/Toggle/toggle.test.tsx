import React from 'react';
import { resetId } from 'react-id-generator';

import { Toggle } from '~components';
import { screen, render } from '~lib/test-utils';

test('handles the id prop when an id has been provided', async () => {
  const id = 'testid';

  render(<Toggle id={id} />);

  expect(screen.getByRole('checkbox')).toHaveAttribute('id', id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  render(<Toggle />);

  expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'toggle-id1');
});
