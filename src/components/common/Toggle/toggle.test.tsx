import React from 'react';
import { Toggle } from '~components';
import { fireEvent, render } from '~/lib';

test('receives change events', async () => {
  const onChange = jest.fn();
  const { getByRole } = render(<Toggle checked={false} onChange={onChange} />);
  const toggleRole: any = getByRole('checkbox');

  expect(toggleRole.checked).toBeFalsy();

  fireEvent.click(toggleRole, { target: { checked: true } });
  expect(onChange).toBeCalled();
});
