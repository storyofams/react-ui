import React from 'react';
import { Text } from '~components';
import { render } from '~lib';

test('renders content', async () => {
  const text = 'Test';
  const { getByTestId } = render(<Text data-testid="text">{text}</Text>);

  expect(getByTestId('text').innerHTML).toBe(text);
});
