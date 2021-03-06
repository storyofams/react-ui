import React from 'react';
import { axe } from 'jest-axe';

import { resetId } from 'react-id-generator';
import { Checkbox } from '~components';
import { screen, render } from '~lib/test-utils';

const label = 'label-input-wrapper';

test('[Checkbox] should not fail accessibility testing', async () => {
  const { container } = render(<Checkbox label="label" />);

  expect(
    await axe(container, {
      rules: {
        /** @note this is done because radix uses a button not a label */
        label: { enabled: false },
      },
    }),
  ).toHaveNoViolations();
});

test('handles the id prop when an id has been provided', async () => {
  const id = 'testid';
  render(<Checkbox id={id} label={label} />);

  expect(
    screen.getByRole('checkbox', {
      name: /label-input-wrapper/i,
    }),
  ).toHaveAttribute('id', id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  const id = 'checkbox-id1';
  render(<Checkbox label={label} />);

  expect(
    screen.getByRole('checkbox', {
      name: /label-input-wrapper/i,
    }),
  ).toHaveAttribute('id', id);
});
