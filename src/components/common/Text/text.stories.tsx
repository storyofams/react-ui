import React from 'react';

import { Box, Text } from '~components';

export default {
  component: Text,
  title: 'components/Text',
  args: {
    children: 'text',
    h1: 'Headings/H1',
    h2: 'Headings/H2',
    h3: 'Headings/H3',
    h4: 'Headings/H4',
    h5: 'Headings/H5',
    plg: 'Paragraph/Large',
    pmd: 'Paragraph/Normal',
    psm: 'Paragraph/Small',
    plgStrong: 'Paragraph/LargeStrong',
    pmdStrong: 'Paragraph/NormalStrong',
    psmStrong: 'Paragraph/SmallStrong',
  },
};

const texts = [
  { key: 'h1' },
  { key: 'h2' },
  { key: 'h3' },
  { key: 'h4' },
  { key: 'h5' },
  { key: 'plg' },
  { key: 'plg', fontWeight: 'bold' },
  { key: 'pmd' },
  { key: 'pmd', fontWeight: 'bold' },
  { key: 'psm' },
  { key: 'psm', fontWeight: 'bold' },
];

export const Basic = (args) => (
  <Box display="flex" maxWidth="400px" flexDirection="column">
    {texts.map(({ key, fontWeight }) => (
      <Text
        variant={key}
        {...args}
        fontWeight={fontWeight}
        sx={{ paddingBottom: 4 }}
      >
        {args[fontWeight ? `${key}Strong` : key]}
      </Text>
    ))}
  </Box>
);
