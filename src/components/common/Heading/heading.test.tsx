import React from 'react';
import { axe } from 'jest-axe';

import { Heading } from '~components';
import { render, screen } from '~lib/test-utils';

const text =
  'Quia doloremque assumenda laboriosam dignissimos quam autem recusandae optio.';

test('[Heading] should not fail accessibility testing', async () => {
  const { container } = render(<Heading>{text}</Heading>);

  expect(await axe(container)).toHaveNoViolations();
});

test('renders content', async () => {
  render(<Heading>{text}</Heading>);

  expect(screen.getByText(text)).toBeInTheDocument();
});
