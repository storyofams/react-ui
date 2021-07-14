import React from 'react';
import { axe } from 'jest-axe';
import { resetId } from 'react-id-generator';

import { InputWrapper } from '~components';
import { render, screen } from '~lib/test-utils';

const id = 'testid';
const label = 'label-input-wrapper';

test('[InputWrapper] should not fail accessibility testing', async () => {
  const { container } = render(<InputWrapper />);

  expect(await axe(container)).toHaveNoViolations();
});

test('handles the id prop when an id has been provided', async () => {
  render(
    <InputWrapper id={id} label={label}>
      <input id={id} />
    </InputWrapper>,
  );

  expect(screen.getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  const randomId = 'input-id1';
  render(
    <InputWrapper label={label}>
      <input id={randomId} />
    </InputWrapper>,
  );

  expect(screen.getByLabelText(label).id).toBe(randomId);
});

test('handles statusMessage', async () => {
  render(
    <InputWrapper id={id} statusMessage="statusMessage" label={label}>
      <input id={id} />
    </InputWrapper>,
  );

  expect(screen.getByLabelText(label).id).toBe(id);
});

test('handles error', async () => {
  render(
    <InputWrapper id={id} error="error" label={label}>
      <input id={id} />
    </InputWrapper>,
  );

  expect(screen.getByLabelText(label).id).toBe(id);
});
