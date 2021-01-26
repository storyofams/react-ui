import React from 'react';
import { resetId } from 'react-id-generator';
import { Textarea } from '~components';
import { render } from '~lib';

const label = 'label';

test('handles the id prop when an id has been provided', async () => {
  const id = 'testid';
  const { getByLabelText } = render(
    <Textarea id={id} data-testid="test" label={label} />,
  );

  expect(getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  resetId();

  const id = 'textarea-id1';
  const { getByLabelText } = render(
    <Textarea data-testid="test" label={label} />,
  );

  expect(getByLabelText(label).id).toBe(id);
});
