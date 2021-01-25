import React from 'react';
import { Textarea } from '~components';
import { render } from '~/lib';

test('handles the id prop when an id has been provided', async () => {
  const label = 'label';
  const id = 'testid';
  const { getByLabelText } = render(
    <Textarea id={id} data-testid="test" label={label} />,
  );

  expect(getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  const label = 'label';
  const { getByLabelText } = render(
    <Textarea data-testid="test" label={label} />,
  );

  expect(getByLabelText(label).id).toBe('textarea-random-id');
});
