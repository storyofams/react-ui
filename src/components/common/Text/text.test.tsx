import React from 'react';
import { axe } from 'jest-axe';

import { Text } from '~components';
import { render } from '~lib';

test('[Text] should not fail accessibility testing', async () => {
  const { container } = render(<Text />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('renders content', async () => {
  const text = 'Test';
  const { getByTestId } = render(<Text data-testid="text">{text}</Text>);

  expect(getByTestId('text').innerHTML).toBe(text);
});
