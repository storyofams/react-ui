import React from 'react';

import { Box, Text } from '~components';

export default {
  component: Text,
  title: 'components/Text',
  args: {
    children: 'text',
    plg: 'Paragraph/Large',
    pmd: 'Paragraph/Normal',
    psm: 'Paragraph/Small',
    plgStrong: 'Paragraph/LargeStrong',
    pmdStrong: 'Paragraph/NormalStrong',
    psmStrong: 'Paragraph/SmallStrong',
  },
};

const texts = [
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
      <Text variant={key} {...args} fontWeight={fontWeight}>
        {args[fontWeight ? `${key}Strong` : key]}
      </Text>
    ))}
  </Box>
);
