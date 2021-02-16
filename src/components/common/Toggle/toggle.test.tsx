import React from 'react';
import { axe } from 'jest-axe';
import { Toggle } from '~components';
import { fireEvent, render } from '~lib';

test('[Toggle] should not fail accessibility testing', async () => {
  const { container } = render(<Toggle />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('receives change events', async () => {
  const onChange = jest.fn();
  const { getByRole } = render(<Toggle checked={false} onChange={onChange} />);
  const toggleRole: any = getByRole('checkbox');

  expect(toggleRole.checked).toBeFalsy();

  fireEvent.click(toggleRole, { target: { checked: true } });
  expect(onChange).toBeCalled();
});
