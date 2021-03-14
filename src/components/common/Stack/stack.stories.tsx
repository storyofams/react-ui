import React from 'react';

import { Stack, Box } from '~components';
import theme from '~styles/theme';

export default {
  component: Stack,
  title: 'components/Stack',
  args: {
    borderRadius: 'xs',
    size: '40px',
    backgroundColor: 'primary400',
  },
  argTypes: {
    backgroundColor: { control: { type: 'select', options: theme.colors } },
    borderRadius: { control: { type: 'select', options: theme.radii } },
  },
};

export const Basic = (args) => (
  <Box>
    <h1>
      Stack is a layout utility that adds space on one side which in turn
      creates a stack.
    </h1>
    <Stack space={3} mt={2}>
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
    </Stack>
  </Box>
);

export const Responsive = (args) => (
  <Box>
    <Stack flexDirection={args.flexDirTop} space={[1, 2, 3]}>
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
    </Stack>
    <Stack mt={3} space={3} flexDirection={args.flexDirMiddle}>
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
    </Stack>
    <Stack mt={3} space={3} flexDirection={args.flexDirBottom}>
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
      <Box {...args} />
    </Stack>
  </Box>
);

Responsive.args = {
  flexDirTop: ['row', 'column'],
  flexDirMiddle: ['row', 'column', 'row'],
  flexDirBottom: ['column', 'row'],
};

export const OverwritingMargin = (args) => (
  <Stack space={[0, 5, 9]}>
    <Box {...args} mt={args.mtFirstItem} />
    <Box mt={5} mr={5} {...args} />
    <Box {...args} />
  </Stack>
);

OverwritingMargin.args = {
  mtFirstItem: 5,
  mr: 5,
};
