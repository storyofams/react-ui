import React from 'react';
import { axe } from 'jest-axe';

import { Text } from '~components';
import { render, screen } from '~lib/test-utils';

const text =
  'Et vitae doloribus nemo quasi vel amet. Debitis delectus officiis distinctio modi tempore adipisci architecto ipsam. Tempora ut est molestias voluptatem mollitia. Maxime quos sapiente sunt deleniti enim ipsam.';

test('[Text] should not fail accessibility testing', async () => {
  const { container } = render(<Text />);

  expect(await axe(container)).toHaveNoViolations();
});

test('renders content', async () => {
  render(<Text>{text}</Text>);

  expect(screen.getByText(text)).toBeInTheDocument();
});
