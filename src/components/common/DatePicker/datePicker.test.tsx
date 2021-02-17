import React from 'react';
import { axe } from 'jest-axe';

import { DatePicker } from '~components';
import { render } from '~lib';

jest.mock('../Icon/library/calendar.svg', () => 'div');

test('[DatePicker] should not fail accessibility testing', async () => {
  const { container } = render(
    <DatePicker
      value={null}
      onChange={() => null}
      inputProps={{ label: 'label', placeholder: 'Placeholder' }}
    />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('adds classnames to allow styling', async () => {
  const { getByTestId } = render(
    <DatePicker
      className="test-class-to-add"
      value={null}
      onChange={() => null}
      inputProps={{
        placeholder: 'Placeholder',
      }}
    />,
  );

  const element = getByTestId('flatpickr-input-container');
  const flatpickrElement = element.parentNode.nextSibling as any;

  expect(flatpickrElement.classList.contains('test-class-to-add')).toBe(true);
});
