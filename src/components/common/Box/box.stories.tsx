import React from 'react';

import { Box } from '~components/common/Box';

export default {
  component: Box,
  title: 'components/Box',
};

export const Basic = (args) => (
  <Box display="flex" flex={1} width="20px" height="20px" mx={'mobileGutter'}>
    <Box as="p" fontSize={1.25}>
      I'm a paragraph
    </Box>
    <Box as="button" onClick={console.log} fontSize={1.25}>
      I'm a button
    </Box>
    <Box as="a" target="_blank" fontSize={1.25}>
      I'm a link
    </Box>
  </Box>
);
