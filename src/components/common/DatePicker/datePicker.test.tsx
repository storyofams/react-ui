import React from 'react';
import { axe } from 'jest-axe';

import { DatePicker } from '~components';
import { render, screen } from '~lib/test-utils';

jest.mock('../Icon/library/calendar.svg', () => 'div');

test('[DatePicker] should not fail accessibility testing', async () => {
  const { container } = render(
    <DatePicker
      value={null}
      onChange={() => null}
      inputProps={{ label: 'label', placeholder: 'Placeholder' }}
    />,
  );

  expect(await axe(container)).toHaveNoViolations();
});

test('adds classnames to allow styling', async () => {
  render(
    <DatePicker
      className="test-class-to-add"
      value={null}
      onChange={() => null}
      inputProps={{
        placeholder: 'Placeholder',
      }}
    />,
  );

  const element = screen.getByTestId('flatpickr-input-container');
  const flatpickrElement = element.parentNode.nextSibling as any;

  expect(flatpickrElement).toHaveClass('test-class-to-add');
});
