import React from 'react';
import { InputWrapper } from '~components';
import { render } from '~/lib';

const id = 'testid';
const label = 'label-input-wrapper';

test('handles the id prop when an id has been provided', async () => {
  const { getByLabelText } = render(
    <InputWrapper id={id} label={label}>
      <input id={id} />
    </InputWrapper>,
  );

  expect(getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  const id = 'input-random-id';
  const { getByLabelText } = render(
    <InputWrapper label={label}>
      <input id={id} />
    </InputWrapper>,
  );

  expect(getByLabelText(label).id).toBe(id);
});

test('handles statusMessage', async () => {
  const { getByLabelText } = render(
    <InputWrapper id={id} statusMessage="statusMessage" label={label}>
      <input id={id} />
    </InputWrapper>,
  );

  expect(getByLabelText(label).id).toBe(id);
});

test('handles error', async () => {
  const { getByLabelText } = render(
    <InputWrapper id={id} error="error" label={label}>
      <input id={id} />
    </InputWrapper>,
  );

  expect(getByLabelText(label).id).toBe(id);
});
