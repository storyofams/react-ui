import React from 'react';

import { Stack, Breadcrumb, MenuLink, CategoryLink } from '~components';

export default {
  component: Stack,
  title: 'components/Nav',
  args: {
    title: 'Level 2',
    href: '/',
  },
};

export const Basic = (args) => (
  <Stack space={2} maxWidth="400px" flexDirection="column">
    <Breadcrumb links={[{ title: 'Level 1', href: '/' }, args]} />
    <MenuLink href="/">MenuLink</MenuLink>
    <CategoryLink href="/">Category link</CategoryLink>
  </Stack>
);
