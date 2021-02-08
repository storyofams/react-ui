import React from 'react';

import { Stack, Accordion } from '~components';

export default {
  component: Accordion,
  title: 'components/Accordion',
  args: {
    children: 'This is some accordeon content',
  },
};

export const Basic = (args) => (
  <Stack space={0} maxWidth="400px" sx={{ flexDirection: 'column' }}>
    <Accordion title="This is an accordeon line" {...args} />
  </Stack>
);
