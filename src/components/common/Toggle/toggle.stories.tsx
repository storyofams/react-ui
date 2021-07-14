import React from 'react';

import { Toggle } from '~components';

export default {
  component: Toggle,
  title: 'components/Toggle',
  args: {
    label: 'editable label text',
    statusMessage: 'editable status text',
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

export const Basic = (args) => <Toggle {...args} />;
