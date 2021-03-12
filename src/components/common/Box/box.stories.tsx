/* eslint-disable mdx/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import { Box } from '~components/common/Box';

export default {
  component: Box,
  title: 'components/Box',
};

export const Basic = (args) => (
  <Box display="flex" flex={1} width="20px" height="20px" mx={'mobileGutter'}>
    <Box as="p" backgroundColor="error50" fontSize={2}>
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

const CustomBox = styled(Box)`
  &:hover {
    background-color: ${(p) => p.theme.colors.primary400};
  }
`;

export const Custom = (args) => (
  <CustomBox
    flex={1}
    width="20px"
    height="20px"
    mx={'mobileGutter'}
    display={['none !important', 'flex !important']}
  >
    <CustomBox as="p" backgroundColor="error50" fontSize={2}>
      I'm a paragraph
    </CustomBox>
    <CustomBox as="button" onClick={console.log} fontSize={1.25}>
      I'm a button
    </CustomBox>
    <CustomBox as="a" target="_blank" fontSize={1.25}>
      I'm a link
    </CustomBox>
  </CustomBox>
);
