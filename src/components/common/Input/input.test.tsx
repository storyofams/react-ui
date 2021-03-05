import React from 'react';
import { axe } from 'jest-axe';
import { resetId } from 'react-id-generator';

import { Input } from '~components';
import { render } from '~lib/test-utils';

const id = 'testid';
const label = 'label-input-wrapper';

test('[Input] should not fail accessibility testing', async () => {
  const { container } = render(<Input label="input" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('handles the id prop when an id has been provided', async () => {
  const { getByLabelText } = render(<Input id={id} label={label} />);

  expect(getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  const randomId = 'input-id1';
  const { getByLabelText } = render(<Input label={label} />);

  expect(getByLabelText(label).id).toBe(randomId);
});

test('handles statusMessage', async () => {
  const { getByLabelText } = render(
    <Input id={id} statusMessage="statusMessage" label={label} />,
  );

  expect(getByLabelText(label).id).toBe(id);
});

test('handles error', async () => {
  const { getByLabelText } = render(
    <Input id={id} error="error" label={label} />,
  );

  expect(getByLabelText(label).id).toBe(id);
});
