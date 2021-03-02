import React from 'react';

import { Box } from '~components/common/PolyBox';

export default {
  component: Box,
  title: 'components/box',
};

export const Basic = (args) => (
  <Box
    as="button"
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
