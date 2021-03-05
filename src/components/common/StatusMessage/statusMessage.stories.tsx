import React from 'react';

import { Stack, StatusMessage } from '~components';

export default {
  component: StatusMessage,
  title: 'components/StatusMessage',
  args: {
    children: 'editable status text',
    status: 'default',
  },
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['default', 'success', 'warning', 'error'],
      },
    },
  },
};

export const Basic = (args) => (
  <Stack space={3} maxWidth="270px" flexDirection="column">
    <StatusMessage {...args} />
  </Stack>
);
