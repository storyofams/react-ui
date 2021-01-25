import React from 'react';
import { Input } from '~components';
import { render } from '~lib';

const id = 'testid';
const label = 'label-input-wrapper';

test('handles the id prop when an id has been provided', async () => {
  const { getByLabelText } = render(<Input id={id} label={label} />);

  expect(getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  const id = 'input-random-id';
  const { getByLabelText } = render(<Input label={label} />);

  expect(getByLabelText(label).id).toBe(id);
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
