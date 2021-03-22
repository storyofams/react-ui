/* eslint-disable mdx/no-unescaped-entities */
import React from 'react';

import { Box } from '~components/common/Box';
import { Stack } from '~components/common/Stack';
import { CustomBox } from './index';

export default {
  component: Box,
  title: 'components/Box',
};

export const Basic = (args) => (
  <Stack space={2} flexDirection="column" display="flex">
    <Box
      as="p"
      p={2}
      fontSize={3}
      borderRadius="sm"
      backgroundColor="secondary50"
      display="flex"
      gridColumnGap={2}
    >
      I'm a paragraph
    </Box>
    <Box
      as="button"
      onClick={console.log}
      fontSize={2}
      _disabled={{ backgroundColor: 'warning800', display: 'flex' }}
      disabled
    >
      I'm a button
    </Box>
    <Box as="a" target="_blank" href="" fontSize={2}>
      I'm a link
    </Box>
    <CustomBox
      as="p"
      p={2}
      fontSize={3}
      borderRadius="sm"
      backgroundColor="secondary50"
      display="flex"
      gridColumnGap={2}
      myOwnProp
    >
      I'm a paragraph
    </CustomBox>
    <CustomBox
      as="button"
      onClick={console.log}
      fontSize={2}
      _hover={{ backgroundColor: 'warning800', display: 'flex' }}
      disabled
      myOwnProp
    >
      I'm a button
    </CustomBox>
    <CustomBox as="a" target="_blank" fontSize={2} myOwnProp>
      I'm a link
    </CustomBox>
  </Stack>
);
