import React from 'react';

import { Toggle } from '~components';

import { styled } from '~lib';

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

const ExtendedToggle = styled(Toggle, {
  baseStyles: {
    '> .slider': {
      backgroundColor: 'grey300',
      borderColor: 'grey300',
    },
    "[data-reach-custom-checkbox][data-state='checked']": {
      '& + .slider': {
        backgroundColor: 'grey800',
        borderColor: 'grey800',
      },
    },
  },
});

export const Basic = (args) => <Toggle {...args} />;

export const Extended = (args) => <ExtendedToggle />;
