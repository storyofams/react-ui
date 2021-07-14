import React from 'react';
import { axe } from 'jest-axe';
import { resetId } from 'react-id-generator';

import { Input } from '~components';
import { render, screen } from '~lib/test-utils';

const id = 'testid';
const label = 'label-input-wrapper';

test('[Input] should not fail accessibility testing', async () => {
  const { container } = render(<Input label="input" />);

  expect(await axe(container)).toHaveNoViolations();
});

test('handles the id prop when an id has been provided', async () => {
  render(<Input id={id} label={label} />);

  expect(screen.getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  const randomId = 'input-id1';
  render(<Input label={label} />);

  expect(screen.getByLabelText(label).id).toBe(randomId);
});

test('handles statusMessage', async () => {
  render(<Input id={id} statusMessage="statusMessage" label={label} />);

  expect(screen.getByLabelText(label).id).toBe(id);
});

test('handles error', async () => {
  render(<Input id={id} error="error" label={label} />);

  expect(screen.getByLabelText(label).id).toBe(id);
});
