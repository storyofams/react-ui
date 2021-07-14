import React from 'react';

import { Breadcrumb } from '~components';
import { render, screen } from '~lib/test-utils';

jest.mock('../Icon/library/chevron-right.svg', () => 'div');

const links = [
  { title: 'Level 1', href: '/' },
  { title: 'Level 2', href: '/' },
];

test('[nav] Breadcrumb', async () => {
  render(<Breadcrumb data-testid="breadcrumb" links={links} />);

  expect(screen.getByText(links[0].title)).toBeInTheDocument();
  expect(screen.getByText(links[1].title)).toBeInTheDocument();
});
