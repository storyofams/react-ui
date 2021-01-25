import React from 'react';
import { Checkbox } from '~components';
import { render } from '~/lib';

const label = 'label-input-wrapper';

test('handles the id prop when an id has been provided', async () => {
  const id = 'testid';
  const { getByLabelText } = render(<Checkbox id={id} label={label} />);

  expect(getByLabelText(label).id).toBe(id);
});

test('handles the id prop when no id has been provided', async () => {
  const id = 'checkbox-random-id';
  const { getByLabelText } = render(<Checkbox label={label} />);

  expect(getByLabelText(label).id).toBe(id);
});
