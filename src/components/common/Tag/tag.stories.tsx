import React from 'react';

import { Tag } from '~components';

export default {
  component: Tag,
  title: 'components/Tag',
  args: {
    label: 'label text',
    statusMessage: 'status text',
    status: 'error',
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
  parameters: { controls: { hideNoControlsWarning: true } },
};

export const Basic = (args) => <Tag {...args} />;
