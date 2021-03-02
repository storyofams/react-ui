import React from 'react';

import { Box } from '~components/common/Box';

export default {
  component: Box,
  title: 'components/box',
};

export const Basic = (args) => (
  <Box
    as="button"
    display="flex"
    flex={1}
    width="20px"
    height="20px"
    mx={'mobileGutter'}
    backgroundColor="primary200"
  >
    <Box as="p" fontSize={1.25}>
      Awesome text
    </Box>
  </Box>
);
