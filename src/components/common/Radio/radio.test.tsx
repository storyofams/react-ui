import React, { useState } from 'react';
import { Radio, RadioGroup } from '~components';
import { fireEvent, render } from '~/lib';

export const Basic = (args) => {
  const [val, setVal] = useState(null);

  return (
    <RadioGroup value={val} onChange={setVal}>
      <Radio data-testid="radio-1" value="1">
        one
      </Radio>
      <Radio value="2">two</Radio>
      <Radio data-testid="radio-3" value="3">
        three
      </Radio>
    </RadioGroup>
  );
};

test('receives change events', async () => {
  const { getByLabelText, getByTestId } = render(<Basic />);
  const firstRadio: any = getByLabelText(/one/i);

  expect(firstRadio.checked).toBeFalsy();

  const firstLabel = getByTestId('radio-1');
  fireEvent.click(firstLabel);

  expect(firstRadio.checked).toBeTruthy();
});

test('handles non valid element', async () => {
  const nonValidReactElement = 'Test';
  const { getByRole } = render(
    <RadioGroup value={null} onChange={null}>
      {nonValidReactElement}
    </RadioGroup>,
  );
  const element = getByRole('radiogroup');

  expect(element.innerHTML).toBe(nonValidReactElement);
});
