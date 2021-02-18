import React from 'react';
import { axe } from 'jest-axe';
import { resetId } from 'react-id-generator';

import { Select } from '~components';
import { render } from '~lib';

const id = 'testid';
const label = 'label';

test('[Select] should not fail accessibility testing', async () => {
  const { container } = render(<Select label="select" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('handles the id prop when an id has been provided', async () => {
  const { getByLabelText } = render(<Select id={id} label={label} />);

  expect(getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  const randomId = 'select-id1';
  const { getByLabelText } = render(<Select label={label} />);

  expect(getByLabelText(label).id).toBe(randomId);
});

test('handles the id prop when no label has been provided', async () => {
  const { getByRole } = render(<Select id={id} />);

  expect(getByRole('textbox').id).toBe(id);
});
