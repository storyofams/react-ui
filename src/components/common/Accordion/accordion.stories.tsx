import React from 'react';

import { Stack, Accordion, Text } from '~components';

export default {
  component: Accordion,
  title: 'components/Accordion',
  args: {
    title: 'This is an accordeon line',
    children: 'This is some accordeon content',
  },
};

export const Basic = (args) => (
  <Stack space={1} maxWidth="400px" flexDirection="column">
    <Accordion {...args} />
    <Accordion title="This is an accordeon line">
      <Text>HI</Text>
      <Text>HI</Text>
    </Accordion>
  </Stack>
);
