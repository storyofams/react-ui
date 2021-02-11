import React from 'react';
import { axe } from 'jest-axe';
import { resetId } from 'react-id-generator';

import { Checkbox } from '~components';
import { render } from '~lib';

const label = 'label-input-wrapper';

test('[Checkbox] should not fail accessibility testing', async () => {
  const { container } = render(<Checkbox label="label" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('handles the id prop when an id has been provided', async () => {
  const id = 'testid';
  const { getByLabelText } = render(<Checkbox id={id} label={label} />);

  expect(getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  const id = 'checkbox-id1';
  const { getByLabelText } = render(<Checkbox label={label} />);

  expect(getByLabelText(label).id).toBe(id);
});
