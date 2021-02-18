import React from 'react';

import { Input } from '~components';

export default {
  component: Input,
  title: 'components/Input',
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
    status: 'success',
    statusMessage: 'Status text',
    required: false,
    disabled: false,
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

export const Basic = (args) => <Input {...args} />;
