import React from 'react';
import { axe } from 'jest-axe';
import { resetId } from 'react-id-generator';

import { Select } from '~components';
import { render, screen } from '~lib/test-utils';

const id = 'testid';
const label = 'label';

test('[Select] should not fail accessibility testing', async () => {
  const { container } = render(<Select label="select" />);

  expect(await axe(container)).toHaveNoViolations();
});

test('handles the id prop when an id has been provided', async () => {
  render(<Select id={id} label={label} />);

  expect(screen.getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  const randomId = 'select-id1';
  render(<Select label={label} />);

  expect(screen.getByLabelText(label).id).toBe(randomId);
});

test('handles the id prop when no label has been provided', async () => {
  render(<Select id={id} />);

  expect(screen.getByRole('textbox').id).toBe(id);
});
