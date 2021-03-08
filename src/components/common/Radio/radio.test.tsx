import React from 'react';
import { axe } from 'jest-axe';

import { RadioGroup } from '~components';
import { render, screen, fireEvent } from '~lib/test-utils';

test('[Radio] should not fail accessibility testing', async () => {
  const { container } = render(
    <RadioGroup
      space={1}
      name="test-radio"
      options={[
        { label: 'one', value: '1' },
        { label: 'two', value: '2' },
      ]}
    />,
  );

  expect(await axe(container)).toHaveNoViolations();
});

test('receives change events', async () => {
  render(
    <RadioGroup
      space={1}
      name="test-radio"
      options={[{ label: 'one', value: '1' }, { value: '2' }]}
    />,
  );

  expect(
    screen.getByRole('radio', {
      name: /2/i,
    }),
  ).toBeInTheDocument();

  const radio = screen.getByRole('radio', {
    name: /one/i,
  }) as HTMLInputElement;

  expect(radio.value).toBe('1');

  fireEvent.change(radio, { target: { value: '2' } });

  expect(radio.value).toBe('2');
});
