import React from 'react';
import { axe } from 'jest-axe';
import { resetId } from 'react-id-generator';

import { Checkbox } from '~components';
import { screen, render } from '~lib/test-utils';

const label = 'checkbox-label';

test('[Checkbox] should not fail accessibility testing', async () => {
  const { container } = render(<Checkbox label="label" />);

  expect(await axe(container)).toHaveNoViolations();
});

test('handles the id prop when an id has been provided', async () => {
  const id = 'testid';

  render(<Checkbox id={id} label={label} />);

  expect(
    screen.getByRole('checkbox', {
      name: /checkbox-label/i,
    }),
  ).toHaveAttribute('id', id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  render(<Checkbox label={label} />);

  expect(
    screen.getByRole('checkbox', {
      name: /checkbox-label/i,
    }),
  ).toHaveAttribute('id', 'checkbox-id1');
});
