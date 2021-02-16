import React from 'react';
import { axe } from 'jest-axe';

import { Breadcrumb, MenuLink, CategoryLink, Link } from '~components';
import { render, screen } from '~/lib';

jest.mock('../Icon/library/chevron-right.svg', () => 'div');

const links = [
  { title: 'Level 1', href: '/' },
  { title: 'Level 2', href: '/' },
];

test('[Link] should not fail accessibility testing', async () => {
  const { container } = render(<Link href="/" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('[Breadcrumb] should not fail accessibility testing', async () => {
  const { container } = render(
    <Breadcrumb links={[{ title: 'Level 1', href: '/' }]} />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
test('[CategoryLink] should not fail accessibility testing', async () => {
  const { container } = render(
    <CategoryLink href="/">Category link</CategoryLink>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
test('[MenuLink] should not fail accessibility testing', async () => {
  const { container } = render(<MenuLink href="/">MenuLink</MenuLink>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

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
