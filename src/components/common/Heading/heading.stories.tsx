import React from 'react';

import { Box, Heading } from '~components';

export default {
  component: Heading,
  title: 'components/Heading',
  args: {
    children: 'text',
    h1: 'Headings/H1',
    h2: 'Headings/H2',
    h3: 'Headings/H3',
    h4: 'Headings/H4',
    h5: 'Headings/H5',
  },
};

const texts = [
  { key: 'h1' },
  { key: 'h2' },
  { key: 'h3' },
  { key: 'h4' },
  { key: 'h5' },
];

export const Basic = (args) => (
  <Box display="flex" maxWidth="400px" flexDirection="column">
    {texts.map(({ key }) => (
      <Heading variant={key} {...args} />
    ))}
  </Box>
);
