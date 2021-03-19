/* eslint-disable mdx/no-unescaped-entities */
import React from 'react';

import { Box } from '~components/common/Box';
import { Stack } from '~components/common/Stack';

export default {
  component: Box,
  title: 'components/Box',
};

export const Basic = (args) => (
  <Stack space={2} flexDirection="column" display="flex">
    <Box
      as="p"
      backgroundColor="secondary50"
      p={2}
      fontSize={2}
      borderRadius="sm"
    >
      I'm a paragraph
    </Box>
    <Box as="button" onClick={console.log} fontSize={2}>
      I'm a button
    </Box>
    <Box as="a" target="_blank" fontSize={2}>
      I'm a link
    </Box>
  </Stack>
);
