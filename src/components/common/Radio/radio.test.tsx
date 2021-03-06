import React, { useState } from 'react';
import { axe } from 'jest-axe';

import { Radio, RadioGroup } from '~components';
import { userEvent, render, screen } from '~lib/test-utils';

export const Basic = (args) => {
  const [val, setVal] = useState(null);

  return (
    <RadioGroup space={1} value={val} onChange={setVal}>
      <Radio value="1">one</Radio>
    </RadioGroup>
  );
};

test('[Radio] should not fail accessibility testing', async () => {
  const { container } = render(<Basic />);

  expect(
    await axe(container, {
      rules: {
        /** @note this is done because radix uses a button not a label */
        label: { enabled: false },
      },
    }),
  ).toHaveNoViolations();
});

test('receives change events', async () => {
  render(<Basic />);

  expect(
    screen.getByRole('radio', {
      name: /one/i,
    }),
  ).toHaveAttribute('aria-checked', 'false');

  userEvent.click(
    screen.getByRole('radio', {
      name: /one/i,
    }),
  );

  expect(
    screen.getByRole('radio', {
      name: /one/i,
    }),
  ).toHaveAttribute('aria-checked', 'true');
});
