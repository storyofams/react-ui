import React from 'react';

import { Box, Breadcrumb } from '~components';

export default {
  component: Breadcrumb,
  title: 'components/Breadcrumb',
  args: {
    title: 'Level 2',
    href: '/',
  },
};

export const Basic = (args) => (
  <Box maxWidth="400px" flexDirection="column">
    <Breadcrumb links={[{ title: 'Level 1', href: '/' }, args]} />
  </Box>
);
