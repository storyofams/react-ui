import React from 'react';
import { Breadcrumb, MenuLink, CategoryLink } from '~components';
import { render, screen } from '~/lib';

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

test('[nav] MenuLink', async () => {
  const children = 'MenuLink';
  render(
    <MenuLink data-testid="menuLink" href="/">
      {children}
    </MenuLink>,
  );

  expect(screen.getByText(children)).toBeInTheDocument();
});

test('[nav] CategoryLink', async () => {
  const children = 'Category link';
  render(
    <CategoryLink data-testid="categoryLink" href="/">
      {children}
    </CategoryLink>,
  );

  expect(screen.getByText(children)).toBeInTheDocument();
});
