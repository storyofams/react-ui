import React, { useState } from 'react';
import { DatePicker } from '~components';
import { render, screen } from '~lib';

jest.mock('../Icon/library/calendar.svg', () => 'div');

test('adds classnames to allow styling', async () => {
  const { getByTestId } = render(
    <DatePicker
      className="test-class-to-add"
      value={null}
      onChange={() => null}
      inputProps={{
        placeholder: 'this is a date field',
      }}
    />,
  );

  const element = getByTestId('flatpickr-input-container');
  const flatpickrElement = element.parentNode.nextSibling as any;

  expect(flatpickrElement.classList.contains('test-class-to-add')).toBe(true);
});
